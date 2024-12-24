import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type InputProps = TextFieldProps & {
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return <TextField label={label} fullWidth variant="outlined" {...props} />;
};

export default Input;