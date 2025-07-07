// src/api/service/incidentService.js

import { IncidentRoutes } from '../routes';
import api from './apiService';

// Crear incidencia (form-data)
export const createIncident = async (incidentData) => {
  const formData = new FormData();

  formData.append('title', incidentData.title);
  formData.append('description', incidentData.description);
  formData.append('dateEmision', incidentData.dateEmision);
  formData.append('priority', incidentData.priority);
  formData.append('image', incidentData.image);
  formData.append('dateAccept', incidentData.dateAccept);
  formData.append('state', incidentData.state);
  formData.append('categoryId', incidentData.categoryId);
  formData.append('locationId', incidentData.locationId);

  const response = await api.post(IncidentRoutes.CREATE, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

// Obtener todas las incidencias
export const getAllIncidents = async () => {
  const response = await api.get(IncidentRoutes.LIST_ALL);
  return response.data; // Aquí extraes los datos reales
};

// obtener incidencias filtradas por estado (cliente)
export const getIncidentsByState = async (state) => {
  const response = await api.get(IncidentRoutes.LIST_ALL);
  return response.data.filter((incident) => incident.state === state);
};

// obtener incidencias de prioridad alta
export const getPriorityIncidents = async (priority) => {
  const response = await api.get(IncidentRoutes.LIST_ALL);
  return response.data.filter((incident) => incident.priority === priority);
};

//por prioridad personalizado
export const getIncidentsByPriority = (priority) => {
  switch (priority) {
    case 'Alta':
      return getPriorityIncidents('Alta');
    case 'Media':
      return getPriorityIncidents('Media');
    case 'Baja':
      return getPriorityIncidents('Baja');
    default:
      return getAllIncidents();
  }
};

// Por tipo personalizado
export const getIncidentsByType = (type) => {
  switch (type) {
    case 'Pendiente':
      return getIncidentsByState('Pendiente');
    case 'Asignado':
      return getIncidentsByState('Asignado');
    case 'Completado':
      return getIncidentsCompleted();
    case 'Culminadas':
      return getIncidentsCulminadas();
    default:
      return getIncidentsByState(type);
  }
};

// Obtener todas las incidencias
export const getIncidentsCompleted = async () => {
  const response = await api.get(IncidentRoutes.COMPLETED);
  return response.data; // Aquí extraes los datos reales
};

// Obtener todas las incidencias culminadas
export const getIncidentsCulminadas = async () => {
  const response = await api.get(IncidentRoutes.CULMINADAS);
  return response.data; // Aquí extraes los datos reales
};


export const getIncidentsUsers = async () => {
  const response = await api.get(IncidentRoutes.USERS);
  return response.data;
}

// Obtener usuarios por tipo de rol (usa 'rol' en lugar de 'role')
export const getUsersByRole = async (role) => {
  const response = await api.get(IncidentRoutes.USERS);
  return response.data.filter((user) => user.rol === role);
};

// Obtener operarios
export const getOperators = async () => {
  return getUsersByRole('Operador'); // debe coincidir exactamente con el valor del backend
};

// Obtener administradores
export const getAdmins = async () => {
  return getUsersByRole('Admin');
};

// Obtener usuarios
export const getUsers = async () => {
  return getUsersByRole('Usuario');
};
