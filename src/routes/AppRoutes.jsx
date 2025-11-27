// ...existing code...
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import IncidentReports from '@/pages/incidents/IncidentReports';
import RecordIncidents from '@/pages/incidents/RecordIncident';
import MyCases from '@/pages/incidents/MyCases';
import NewsPage from '@/pages/incidents/NewsPage';
import TracingPage from '@/pages/incidents/TracingPage';
import AssignCases from '@/pages/incidents/AssignCases';
import ManegeAccounts from '@/pages/accounts/ManageAccounts';
import IncidentDetailPage from '@/pages/details/IncidentDetailPage';
import RegisterPage from '@/pages/accounts/RegisterPage';
// ...existing code...

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<DashboardHome />} />
      <Route path="/home/incident-reports" element={<IncidentReports />} />
      <Route path="/home/record" element={<RecordIncidents />} />
      <Route path="/home/my-cases" element={<MyCases />} />
      <Route path="/home/news" element={<NewsPage />} />
      <Route path="/home/tracing" element={<TracingPage />} />
      <Route path="/home/assing-cases" element={<AssignCases />} />
      <Route path="/home/incident-detail/:id" element={<IncidentDetailPage />} />
      <Route path="/accounts/manage-users" element={<ManegeAccounts />} />
      <Route path="/accounts/register-user" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
// ...existing code...