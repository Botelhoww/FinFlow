import React from "react";
import { Transaction } from "../../utils/api";

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id} className="p-2 border-b">
          <p>{transaction.description}</p>
          <p>{transaction.date}</p>
          <p>
            {transaction.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>{transaction.category}</p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;