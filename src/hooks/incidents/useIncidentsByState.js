// src/hooks/incidents/usePendingIncidents.js

import { useEffect, useState, useCallback } from 'react';
import { getAllIncidentsByState } from '@/api/service/incidentService';

const formatIncident = (incident) => ({
  id: incident.id || '',
  title: incident.title || '',
  description: incident.description || '',
  issueDate: incident.dateEmision ? new Date(incident.dateEmision).toLocaleDateString() : '---',
  priority: incident.priority ? incident.priority.toUpperCase() : '',
  aceptanceDate: incident.dateAccept ? new Date(incident.dateAccept).toLocaleDateString() : '---',
  status: incident.state ? (incident.state === 'Pendiente' ? 'PENDIENTE' : incident.state.toUpperCase()) : '',
  category: incident.category?.typeCategory || 'Sin categoría',
  operators: incident.user?.nombre || 'Sin operador',
  location: `${incident.location?.pavilion ?? 'N/A'}-${incident.location?.floor ?? 'N/A'}`,
  usuario: `${incident.user?.nombre ?? 'S/N'} ${incident.user?.apellidos ?? 'S/A'}`,
});

export const useIncidentsByState = (state) => {
  const [genericIncidents, setGenericIncidents] = useState([]);
  const [tableIncidents, setTableIncidents] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const pending = await getAllIncidentsByState(state);
      const formattedPending = Array.isArray(pending)
        ? pending.map(formatIncident)
        : [formatIncident(pending)];
      const priority = formattedPending.filter((i) => i.priority === 'ALTA');
      console.log(priority);
      setGenericIncidents(priority);
      setTableIncidents(formattedPending);
    } catch (error) {
      console.error('Error al cargar incidencias:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    genericIncidents,
    tableIncidents,
    refreshIncidents: fetchData,
  };
};
