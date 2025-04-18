import { Expense } from "../App";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <ul>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => <ExpenseItem key={expense.id} {...expense} />)
      )}
    </ul>
  );
};

export default ExpenseList;
