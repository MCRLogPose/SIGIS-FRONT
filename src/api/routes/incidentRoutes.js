// routes/incidentRoutes.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';;

export const IncidentRoutes = {
    BASE: `${API_BASE}/incidents`,  // Base URL for incidents
    CREATE: `${API_BASE}/incidents`, // POST multipart/form-data
    LIST_ALL: `${API_BASE}/incidents`, // GET todas las incidencias
    COMPLETED: `${API_BASE}/incidents/completed`, // GET incidencias completadas
    CULMINADAS: `${API_BASE}/incidents/culminadas`, // GET incidencias culminadas
    USERS: `${API_BASE}/incidents/users`, // GET (usuarios usados en incidencias)
    OPERATORS: `${API_BASE}/incidents/operarios`, // GET (operarios usados en incidencias)
    LIST_ALL_ME: `${API_BASE}/incidents/me`,               // GET incidencias propias (usuario logueado)
};