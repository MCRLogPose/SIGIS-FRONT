import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import ViewIncidentReports from '@/pages/incidents/ViewIncidentReports';
import CreateIncident from '@/pages/incidents/CreateIncident';
import RecordIncidents from '@/pages/incidents/RecordIncident';
import MyCases from '@/pages/incidents/MyCases';
import NewsPage from '@/pages/incidents/NewsPage';

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<DashboardHome />} />
      <Route path="/home/view-incident-reports" element={<ViewIncidentReports />} />
      <Route path="/home/create-incident" element={<CreateIncident />} />
      <Route path="/home/record" element={<RecordIncidents />} />
      <Route path="/home/my-cases" element={<MyCases />} />
      <Route path="/home/news" element={<NewsPage />} />
      
    </Routes>
  );
};

export default AppRoutes;