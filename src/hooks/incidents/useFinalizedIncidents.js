// src/hooks/incidents/useFinalizedIncidents.js

import { useEffect, useState } from 'react';
import { getAllIncidents } from '@/api/service/incidentService';

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
  location: `${incident.location?.pavilion || 'N/A'}-${incident.location?.floor ?? 'N/A'}`,
});

export const useFinalizedIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const apiData = await getAllIncidents();
        const formatted = Array.isArray(apiData)
          ? apiData.map(formatIncident)
          : [formatIncident(apiData)];

        setIncidents(formatted);
      } catch (error) {
        console.error('Error al obtener incidencias:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchIncidents();
  }, []);

  return { incidents, loading };
};
