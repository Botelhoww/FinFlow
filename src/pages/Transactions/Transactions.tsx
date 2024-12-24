import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const Transactions: React.FC = () => {
  const mockTransactions = [
    { receiver: "Tesco Market", type: "Shopping", date: "13 Dec 2020", amount: 75.67 },
    { receiver: "ElectroMen Market", type: "Shopping", date: "14 Dec 2020", amount: 250.0 },
    { receiver: "Giorgio Restaurant", type: "Food", date: "07 Dec 2020", amount: 19.5 },
    { receiver: "John Mathew Kayne", type: "Sport", date: "06 Dec 2020", amount: 350.0 },
    { receiver: "Ann Marlin", type: "Shopping", date: "31 Nov 2020", amount: 430.0 },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Transactions
      </Typography>
      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Receiver</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.receiver}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    ${transaction.amount.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Add New Transaction
      </Button>
    </Box>
  );
};

export default Transactions;
