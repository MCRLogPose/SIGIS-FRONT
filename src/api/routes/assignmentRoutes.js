// src/api/routes/assignmentRoutes.js

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const AssignmentRoutes = {
  CREATE: `${API_BASE}/assignments`,                                  // POST - una asignación individual
  BULK_ASSIGN: `${API_BASE}/admin/assigned`,                          // POST - asignar múltiples usuarios a una incidencia
  LIST_ALL: `${API_BASE}/assignment`,                                 // GET - todas las asignaciones
  GROUPED_BY_INCIDENCE: `${API_BASE}/grouped`,                        // GET - asignaciones agrupadas por incidencia
  GET_BY_INCIDENCE: (id) => `${API_BASE}/incidence/${id}`,            // GET - agrupadas por ID de incidencia
  GET_BY_ID: (id) => `${API_BASE}/incidencia/${id}`,                  // GET - usando servicio principal
  UPDATE_RESPONSE: (id) => `${API_BASE}/assignment/${id}/response`,   // PUT - actualizar respuesta estado = en proseso
  MARK_CULMINATED: (id) => `${API_BASE}/assignment/${id}/culminated`, // PUT - marcar como estado = culminada
};