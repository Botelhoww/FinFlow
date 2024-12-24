import React from "react";
import { Box, Typography, Switch, FormControlLabel, TextField, Button } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Settings
      </Typography>
      <FormControlLabel control={<Switch />} label="Enable Dark Mode" />
      <TextField label="Set Monthly Goal" type="number" fullWidth margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Save Settings
      </Button>
    </Box>
  );
};

export default Settings;