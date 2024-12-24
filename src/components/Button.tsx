import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonProps = MuiButtonProps & {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <MuiButton {...props} variant="contained" color="primary">
      {label}
    </MuiButton>
  );
};

export default Button;