export type Transaction = {
  id: number;
  date: string;
  description: string;
  value: number;
  category: string;
};

export const mockTransactions: Transaction[] = [
  {
    id: 1,
    date: "2024-12-20",
    description: "Compra no supermercado",
    value: -150.5,
    category: "Alimentação",
  },
  {
    id: 2,
    date: "2024-12-22",
    description: "Salário",
    value: 2500,
    category: "Receita",
  },
  {
    id: 3,
    date: "2024-12-23",
    description: "Assinatura Netflix",
    value: -39.9,
    category: "Lazer",
  },
];