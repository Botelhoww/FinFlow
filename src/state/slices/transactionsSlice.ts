import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Transaction = {
  id: number;
  description: string;
  value: number;
  category: string;
  date: string;
};

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    removeTransaction(state, action: PayloadAction<number>) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;