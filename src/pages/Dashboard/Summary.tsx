import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

type SummaryProps = {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
};

const Summary: React.FC<SummaryProps> = ({ totalBalance, totalIncome, totalExpenses }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Balance</Typography>
            <Typography variant="h4" color="primary">
              ${totalBalance.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Income</Typography>
            <Typography variant="h4" color="success.main">
              ${totalIncome.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Expenses</Typography>
            <Typography variant="h4" color="error.main">
              ${totalExpenses.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Summary;