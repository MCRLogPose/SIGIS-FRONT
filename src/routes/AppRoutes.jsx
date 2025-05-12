import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import ViewIncidentReports from '@/pages/incident-reports/ViewIncidentReports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<DashboardHome />} />
      <Route path="/home/incident-reports" element={<ViewIncidentReports />} />
    </Routes>
  );
};

export default AppRoutes;