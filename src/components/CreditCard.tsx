import React from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WifiIcon from "@mui/icons-material/Wifi";

const CreditCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: 360,
        height: 200,
        borderRadius: 4,
        background: "linear-gradient(135deg,rgb(78, 78, 78),rgb(31, 31, 31))",
        color: "white",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
      }}
    >
      {/* Top Section */}
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          Credit Card
        </Typography>
        <WifiIcon fontSize="large" />
      </Box>

      {/* Card Number */}
      <Typography
        variant="h5"
        fontWeight="bold"
        letterSpacing={4}
        sx={{ textAlign: "center" }}
      >
        1234 5678 9012 3456
      </Typography>

      {/* Bottom Section */}
      <Grid container justifyContent="space-between" alignItems="center">
        {/* Left */}
        <Box>
          <Typography variant="body2">Name Surname</Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            VALID THRU: 01/80
          </Typography>
        </Box>
        {/* Right */}
        <Chip
          icon={<CreditCardIcon />}
          label="Bank Name"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "white",
            fontWeight: "bold",
          }}
        />
      </Grid>
    </Box>
  );
};

export default CreditCard;