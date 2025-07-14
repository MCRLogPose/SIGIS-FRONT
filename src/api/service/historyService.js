// src/api/service/historyService.js
import { HistoryRoutes } from '@/api/routes/historyRoutes';
import api from './apiService';

// Crear historial de asignación
export const createAssignmentHistory = async (payload) => {
  const response = await api.post(HistoryRoutes.CREATE, payload);
  return response.data;
};

// Obtener historial por ID de asignación
export const getAssignmentHistory = async (assignmentId) => {
  const response = await api.get(HistoryRoutes.LIST_ALL(assignmentId));
  return response.data;
};
