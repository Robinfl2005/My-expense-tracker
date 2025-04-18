import { useState } from "react";
import { Expense } from "../App";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    onAddExpense({
      id: Math.random(),
      title,
      amount: parseFloat(amount),
      date,
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Expense Title" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
