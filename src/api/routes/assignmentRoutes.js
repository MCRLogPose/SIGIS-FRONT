// src/api/routes/assignmentRoutes.js

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const AssignmentRoutes = {
  CREATE: `${API_BASE}/assignments`,                      // POST
  LIST_ALL: `${API_BASE}/assignment`,                     // GET
  GROUPED: `${API_BASE}/grouped`,                         // GET
  BY_INCIDENCE: (id) => `${API_BASE}/incidence/${id}`,    // GET
  UPDATE_RESPONSE: (id) => `${API_BASE}/assignment/${id}/response`,   // PUT
  CULMINATE: (id) => `${API_BASE}/assignment/${id}/culminated`,       // PUT
};
