import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

const Reports: React.FC = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Reports
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Expense by Category</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography>Here you can add a chart (e.g., Pie Chart)</Typography>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6">Income vs Expenses</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography>Here you can add a bar or line chart</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Reports;