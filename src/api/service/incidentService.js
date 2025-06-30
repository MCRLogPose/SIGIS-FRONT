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
export const getAllIncidents = () => api.get(IncidentRoutes.LIST_ALL);

// obtener incidencias filtradas por estado (cliente)
export const getIncidentsByState = async (state) => {
  const response = await api.get(IncidentRoutes.LIST_ALL);
  return response.data.filter((incident) => incident.state === state);
};

// Alias semánticos
export const getPendingIncidents = () => getIncidentsByState('Pendiente');
export const getCompletedIncidents = () => getIncidentsByState('Completed');

// Por tipo personalizado
export const getIncidentsByType = (type) => {
  switch (type) {
    case 'Pendiente':
      return getPendingIncidents();
    case 'Completed':
      return getCompletedIncidents();
    default:
      return getIncidentsByState(type);
  }
};

// Endpoints específicos del backend (sin filtro en frontend)
export const getIncidentsCompleted = () => api.get(IncidentRoutes.COMPLETED);
export const getIncidentsCulminadas = () => api.get(IncidentRoutes.CULMINADAS);
export const getIncidentsUsers = () => api.get(IncidentRoutes.USERS);
