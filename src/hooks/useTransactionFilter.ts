import { useState } from "react";
import { Transaction } from "../utils/api";

type FilterOptions = {
  type?: "income" | "expense";
  category?: string;
  dateRange?: { start: string; end: string };
};

export const useTransactionFilter = (transactions: Transaction[]) => {
  const [filter, setFilter] = useState<FilterOptions>({});

  const filteredTransactions = transactions.filter((transaction) => {
    const { type, category, dateRange } = filter;
    const matchesType =
      !type || (type === "income" && transaction.value > 0) || (type === "expense" && transaction.value < 0);
    const matchesCategory = !category || transaction.category === category;
    const matchesDate =
      !dateRange ||
      (new Date(transaction.date) >= new Date(dateRange.start) &&
        new Date(transaction.date) <= new Date(dateRange.end));
    return matchesType && matchesCategory && matchesDate;
  });

  return { filter, setFilter, filteredTransactions };
};