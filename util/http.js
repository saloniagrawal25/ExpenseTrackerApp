import axios from 'axios';

const BACKEND_URL = 'https://expensetrackerapp1-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: response.data[key].date,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
