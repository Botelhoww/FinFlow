import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  LinearProgress,
  Switch,
  Divider,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Dashboard: React.FC = () => {
  const mockTransactions = [
    { receiver: "Tesco Market", type: "Shopping", date: "13 Dec 2020", amount: 75.67 },
    { receiver: "ElectroMen Market", type: "Shopping", date: "14 Dec 2020", amount: 250.0 },
    { receiver: "Giorgio Restaurant", type: "Food", date: "07 Dec 2020", amount: 19.5 },
    { receiver: "John Mathew Kayne", type: "Sport", date: "06 Dec 2020", amount: 350.0 },
    { receiver: "Ann Marlin", type: "Shopping", date: "31 Nov 2020", amount: 430.0 },
  ];

  const outcomeStatistics = [
    { category: "Shopping", percentage: 52, color: "error.main" },
    { category: "Electronics", percentage: 21, color: "primary.main" },
    { category: "Travel", percentage: 74, color: "success.main" },
  ];

  const goals = [
    { amount: "$550", date: "12/20/20", description: "Golf GTI" },
    { amount: "$200", date: "12/20/20", description: "A45 AMG" },
    { amount: "$820", date: "12/20/20", description: "RS3" },
  ];

  return (
    <Box display="flex" p={2}>
      <Box width="100%" pl={2}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Weekly Summary
            </Typography>
            <Typography color="textSecondary">
              Get summary of your weekly online transactions here.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <MailOutlineIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* Cards */}
        <Grid container spacing={2} mb={4}>
          {/* Cards Section */}
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Cards
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {/* Simulação do Cartão com Setas Laterais */}
                  <Box display="flex" alignItems="center" width="60%">
                    <IconButton>
                      <ArrowBackIosIcon />
                    </IconButton>
                    <Box
                      sx={{
                        width: "100%",
                        height: "120px",
                        backgroundColor: "grey.800",
                        borderRadius: "12px",
                        color: "white",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="subtitle1">Credit Card</Typography>
                      <Typography variant="body2">1234 5678 9012 3456</Typography>
                      <Typography variant="caption">Name Surname</Typography>
                    </Box>
                    <IconButton>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>

                  {/* Divisor Vertical */}
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      mx: 2,
                      height: "100px",
                      backgroundColor: "grey.300",
                    }}
                  />

                  {/* Valores Laterais */}
                  <Box display="flex" flexDirection="column" alignItems="flex-end">
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="primary"
                      sx={{ mb: 1 }}
                    >
                      $2850.75
                    </Typography>
                    <Typography variant="body2" color="success.main">
                      + $1500.50 Income
                    </Typography>
                    <Typography variant="body2" color="error.main">
                      - $350.60 Outcome
                    </Typography>
                  </Box>
                </Box>

                {/* Divider */}
                <Divider sx={{ my: 2 }} />

                {/* Weekly Payment Limit */}
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Weekly payment limit
                  </Typography>
                  <Box mt={1}>
                    <LinearProgress
                      variant="determinate"
                      value={(2850.75 / 4000) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "primary.main",
                        },
                      }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body2" color="textSecondary">
                      $2850.75 / $4000
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="body2" color="textSecondary">
                        Deactivate card
                      </Typography>
                      <Switch size="small" />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Goals Section */}
          <Grid item xs={4}>
            <Card>
              <CardContent>
                {/* Título com Ícone */}
                <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
                  <Typography variant="h6" fontWeight="bold">
                    Goals
                  </Typography>
                  <IconButton>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Box>

                {/* Cartões de Metas */}
                <Box display="flex" flexDirection="row" gap={3} overflow="auto">
                  <IconButton>
                      <ArrowBackIosIcon />
                  </IconButton>
                  {goals.map((goal, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "100px",
                        height: "150px", // Aumente o height aqui
                        backgroundColor: "grey.100",
                        borderRadius: "12px",
                        boxShadow: 1,
                        p: 2,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="body2" fontWeight="bold">
                        {goal.amount}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {goal.date}
                      </Typography>
                      <Box mt={1}>
                        <Typography variant="body2" color="primary">
                          {goal.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                  <IconButton>
                      <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Transactions and Outcome Statistics */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6" mb={2}>
              Transaction History
            </Typography>
            <Card>
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
                      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" mb={2}>
              Outcome Statistics
            </Typography>
            <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Outcome Statistics
              </Typography>
              {outcomeStatistics.map((stat, index) => (
                <Box key={index} display="flex" alignItems="center" mb={3}>
                  {/* Ícone da categoria */}
                  <Avatar
                    sx={{
                      bgcolor: stat.color,
                      color: "white",
                      width: 40,
                      height: 40,
                      mr: 2,
                    }}
                  >
                    {stat.category[0]}
                  </Avatar>
                  {/* Informações da categoria */}
                  <Box flexGrow={1}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="body2" fontWeight="bold">
                        {stat.category}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {stat.percentage}%
                      </Typography>
                    </Box>
                    {/* Barra de progresso */}
                    <LinearProgress
                      variant="determinate"
                      value={stat.percentage}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: stat.color,
                        },
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;