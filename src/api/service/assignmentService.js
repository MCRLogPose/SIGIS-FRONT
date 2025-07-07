  // File: src/api/service/assignmentService.js

  import { AssignmentRoutes } from '../routes/assignmentRoutes';
  import api from './apiService';

  // Crear una asignación individual
  export const createAssignment = async (assignmentData) => {
    const response = await api.post(AssignmentRoutes.CREATE, assignmentData);
    return response.data;
  };

  // Asignar múltiples operadores a una incidencia
  export const assignUsersToIncidency = async (groupRequest) => {
    const response = await api.post(AssignmentRoutes.BULK_ASSIGN, groupRequest);
    return response.data;
  };

  // Obtener todas las asignaciones
  export const getAllAssignments = async () => {
    const response = await api.get(AssignmentRoutes.LIST_ALL);
    return response.data;
  };

  // Obtener asignaciones agrupadas por incidencia
  export const getGroupedAssignments = async () => {
    const response = await api.get(AssignmentRoutes.GROUPED_BY_INCIDENCE);
    return response.data;
  };

  // Obtener asignaciones de una incidencia (versión GroupService)
  export const getAssignmentsByIncidence = async (incidenceId) => {
    const response = await api.get(AssignmentRoutes.GET_BY_INCIDENCE(incidenceId));
    return response.data;
  };

  // Obtener asignaciones de una incidencia (versión Service)
  export const getIncidenceAssignments = async (id) => {
    const response = await api.get(AssignmentRoutes.GET_BY_ID(id));
    return response.data;
  };

  // Actualizar respuesta de un operario a su asignación
  export const updateAssignmentResponse = async (assignmentId, responseText) => {
    const response = await api.put(AssignmentRoutes.UPDATE_RESPONSE(assignmentId), {
      response: responseText,
    });
    return response.data;
  };

  // Marcar asignación como culminada
  export const markAssignmentCulminated = async (assignmentId) => {
    const response = await api.put(AssignmentRoutes.MARK_CULMINATED(assignmentId));
    return response.data;
  };

  // Lógica para obtener incidencias sin operadores
const getUnassignedIncidents = (allIncidents, groupedAssignments) => {
  const assignedIds = groupedAssignments.map(item => item.incidencyId);
  return allIncidents.filter(incident => !assignedIds.includes(incident.id));
};

// Lógica para obtener asignaciones de un operador específico
const getAssignmentsForOperator = (groupedAssignments, currentUserId) => {
  return groupedAssignments.filter(item =>
    item.assigned.some(assign => assign.userId === currentUserId)
  );
};

