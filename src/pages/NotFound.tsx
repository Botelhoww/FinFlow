import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box p={2} textAlign="center">
      <Typography variant="h4" color="error" mb={2}>
        404 - Page Not Found
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go Back to Dashboard
      </Button>
    </Box>
  );
};

export default NotFound;