import {StyleSheet, FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = ({item}) => <ExpenseItem {...item} />;

const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpensesList;
