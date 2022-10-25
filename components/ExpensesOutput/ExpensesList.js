import {StyleSheet, FlatList} from 'react-native';

const ExpensesList = ({expenses}) => {
  return <FlatList data={expenses} />;
};

const styles = StyleSheet.create({});

export default ExpensesList;
