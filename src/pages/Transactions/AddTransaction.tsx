import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";

const AddTransaction: React.FC = () => {
  const [transaction, setTransaction] = useState({
    type: "income",
    value: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name!]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(transaction);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Add New Transaction
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select name="type" value={transaction.type} onChange={handleChange}>
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Value"
          name="value"
          type="number"
          fullWidth
          margin="normal"
          value={transaction.value}
          onChange={handleChange}
        />
        <TextField
          label="Category"
          name="category"
          fullWidth
          margin="normal"
          value={transaction.category}
          onChange={handleChange}
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={transaction.date}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          margin="normal"
          value={transaction.description}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Add Transaction
        </Button>
      </form>
    </Box>
  );
};

export default AddTransaction;
