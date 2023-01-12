import {StyleSheet, View} from 'react-native';
import {useLayoutEffect, useContext} from 'react';
import IconButton from '../UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContext} from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import {deleteExpense, storeExpense, updateExpense} from '../util/http';

const ManageExpenses = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );

  const deleteExpenseHandler = async () => {
    await deleteExpense(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async expenseData => {
    if (isEditing) {
      updateExpense(editedExpenseId, expenseData);
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({...expenseData, id: id});
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
