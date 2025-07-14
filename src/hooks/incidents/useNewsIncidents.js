import { useEffect, useState } from 'react';
import { getAllIncidentsByState, getIncidentsByID } from '@/api/service/incidentService';
import { getGroupedAssignments } from '@/api/service/assignmentService';

const formatIncident = (incident, assignment = null) => ({
    id: incident.id,
    title: incident.title,
    description: incident.description,
    issueDate: incident.dateEmision ? new Date(incident.dateEmision).toLocaleDateString() : '---',
    priority: incident.priority ? incident.priority.toUpperCase() : '',
    aceptanceDate: incident.dateAccept ? new Date(incident.dateAccept).toLocaleDateString() : '---',
    status: incident.state ? (incident.state === 'Pendiente' ? 'PENDIENTE' : incident.state.toUpperCase()) : '',
    category: incident.category?.typeCategory || 'Sin categoría',
    operators: incident.user?.nombre || 'Sin operador',
    location: `${incident.location?.pavilion ?? 'N/A'}-${incident.location?.floor ?? 'N/A'}`,
    usuario: `${incident.user?.nombre ?? 'S/N'} ${incident.user?.apellidos ?? 'S/A'}`,
    assignmentId: assignment?.assignmentId || null,
    response: assignment?.response || '',
});

export const useNewsIncidents = (userId) => {
    const [newIncidents, setNewIncidents] = useState([]);
    const [assignedIncidents, setAssignedIncidents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchIncidentsData = async () => {
        setLoading(true);
        try {
            // Incidencias pendientes
            const rawPending = await getAllIncidentsByState('Pendiente');
            const formattedPending = rawPending.map((inc) => formatIncident(inc));

            // Asignaciones del operador actual
            const groupedAssignments = await getGroupedAssignments(userId);
            const formattedAssignments = [];

            for (const group of groupedAssignments) {
                const incidentData = await getIncidentsByID(group.incidencyId);
                const fullIncident = Array.isArray(incidentData) ? incidentData[0] : incidentData;

                group.assigned.forEach(assignment => {
                    // Reutilizamos la misma incidencia, pero agregamos datos del assignment
                    formattedAssignments.push(formatIncident(fullIncident, assignment));
                });
            }
            //filtra por estado = 'asignado'
            const filteredAssignments = formattedAssignments.filter(assignment => assignment.status === 'ASIGNADO');

            setNewIncidents(formattedPending);
            setAssignedIncidents(filteredAssignments);
        } catch (error) {
            console.error('Error al cargar incidentes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) fetchIncidentsData();
    }, [userId]);

    return {
        newIncidents,
        assignedIncidents,
        setNewIncidents,
        setAssignedIncidents,
        fetchIncidentsData,
        loading
    };
};
