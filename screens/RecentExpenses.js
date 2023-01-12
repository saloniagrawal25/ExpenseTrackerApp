import {useContext, useEffect, useState} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {getExpenses} from '../util/http';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses();
      expensesCtx.setExpenses(expenses);
    }
    fetchExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses?.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    const date = new Date(expense.date);
    return date >= date7DaysAgo && date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 days'}
      fallbackText={'No expenses registered for the last 7 days'}
    />
  );
};

export default RecentExpenses;
