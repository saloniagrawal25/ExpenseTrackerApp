import {View, Text, StyleSheet} from 'react-native';

const ExpensesSummary = ({periodName, expenses}) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;
