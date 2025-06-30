// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import ViewIncidentReports from '@/pages/incidents/ViewIncidentReports';
import RecordIncidents from '@/pages/incidents/RecordIncident';
import MyCases from '@/pages/incidents/MyCases';
import NewsPage from '@/pages/incidents/NewsPage';
import TracingPage from '@/pages/incidents/TracingPage';
import AssignCases from '@/pages/incidents/AssignCases';
import ManegeAccounts from '@/pages/accounts/ManageAccounts';
import IncidentDetailPage from '@/pages/details/IncidentDetailPage';
import RegisterPage from '@/pages/accounts/RegisterPage';
import PrivateRoute from '@/routes/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        }
      />
      <Route path="/home/view-incident-reports" element={
          <PrivateRoute>
            <ViewIncidentReports />
          </PrivateRoute>
        }
      />
      <Route path="/home/record" element={
          <PrivateRoute>
            <RecordIncidents />
          </PrivateRoute>
        }
      />
      <Route path="/home/my-cases" element={
          <PrivateRoute>
            <MyCases />
          </PrivateRoute>
        }
      />
      <Route path="/home/news" element={
          <PrivateRoute>
            <NewsPage />
          </PrivateRoute>
        }
      />
      <Route path="/home/tracing" element={
          <PrivateRoute>
            <TracingPage />
          </PrivateRoute>
        }
      />
      <Route path="/home/assing-cases" element={
          <PrivateRoute>
            <AssignCases />
          </PrivateRoute>
        }
      />
      <Route path="/home/incident-detail/:id" element={
          <PrivateRoute>
            <IncidentDetailPage />
          </PrivateRoute>
        }
      />
      <Route path="/accounts/manage-users" element={
          <PrivateRoute>
            <ManegeAccounts />
          </PrivateRoute>
        }
      />
      <Route path="/accounts/register-user" element={ <RegisterPage /> } />
    </Routes>
  );
};

export default AppRoutes;
