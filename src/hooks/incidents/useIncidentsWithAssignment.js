// src/hooks/incidents/useIncidentsWithAssignment.js

import { useState, useEffect } from 'react';
import { getAllIncidentsByState } from '@/api/service/incidentService';
import { getAssignmentsByIncidence } from '@/api/service/assignmentService';

const formatIncident = async (incident) => {
  let assignmentId = null;
  try {
    const res = await getAssignmentsByIncidence(incident.id);
    if (res.assigned && res.assigned.length > 0) {
      assignmentId = res.assigned[0].assignmentId;
    }
  } catch (e) {
    console.warn(`No se encontró asignación para incidencia ${incident.id}`);
  }

  return {
    ...incident,
    assignmentId,
    usuario: `${incident.user?.nombre ?? 'S/N'} ${incident.user?.apellidos ?? 'S/A'}`,
    location: `${incident.location?.pavilion ?? 'N/A'}-${incident.location?.floor ?? 'N/A'}`,
    issueDate: incident.dateEmision ? new Date(incident.dateEmision).toLocaleDateString() : '---',
    aceptanceDate: incident.dateAccept ? new Date(incident.dateAccept).toLocaleDateString() : '---',
    priority: incident.priority ? incident.priority.toUpperCase() : '',
    status: incident.state ? incident.state.toUpperCase() : '',
    category: incident.category?.typeCategory || 'Sin categoría',
  };
};

export const useIncidentsWithAssignments = (state) => {
  const [incidents, setIncidents] = useState([]);

  const fetch = async () => {
    try {
      const raw = await getAllIncidentsByState(state);
      const array = Array.isArray(raw) ? raw : [raw];

      const enriched = await Promise.all(array.map(formatIncident));
      setIncidents(enriched);
    } catch (e) {
      console.error('Error cargando incidencias con asignación', e);
    }
  };

  useEffect(() => {
    fetch();
  }, [state]);

  return { incidents, refreshIncidents: fetch };
};
