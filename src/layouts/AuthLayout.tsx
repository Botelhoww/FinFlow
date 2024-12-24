import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="grey.100"
    >
      <Card sx={{ width: "400px" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            Welcome to FinFlow
          </Typography>
          {children}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthLayout;