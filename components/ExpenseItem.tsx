interface ExpenseProps {
  title: string;
  amount: number;
  date: string;
}

const ExpenseItem: React.FC<ExpenseProps> = ({ title, amount, date }) => {
  return (
    <li>
      <strong>{title}</strong> - ${amount.toFixed(2)} on {new Date(date).toLocaleDateString()}
    </li>
  );
};

export default ExpenseItem;
