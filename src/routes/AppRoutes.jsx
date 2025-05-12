import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import ViewIncidentReports from '@/pages/incidents/ViewIncidentReports';
import CreateIncident from '@/pages/incidents/CreateIncident';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<DashboardHome />} />
      <Route path="/home/view-incident-reports" element={<ViewIncidentReports />} />
      <Route path="/home/create-incident" element={<CreateIncident />} />
    </Routes>
  );
};

export default AppRoutes;