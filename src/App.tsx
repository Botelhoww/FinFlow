import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound";
import AuthLayout from "./layouts/AuthLayout";
import AddTransaction from "./pages/Transactions/AddTransaction";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas protegidas (exemplo com DashboardLayout) */}
        <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/transactions" element={<DashboardLayout><Transactions /></DashboardLayout>} />
        <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        <Route path="/add-transaction" element={<DashboardLayout><AddTransaction /></DashboardLayout>} />

        {/* Rota de autenticação com AuthLayout */}
        <Route path="/login" element={<AuthLayout><div>Login Page</div></AuthLayout>} />

        {/* Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
