import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import AuthPage from './components/AuthPage';
/*function App() {
  return (
    <div>
      <AuthPage />
    </div>
  );
}*/

export interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
}

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Finance Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
