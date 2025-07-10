// src/api/routes/locationRoutes.js

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const LocationRoutes = {
    CREATE: `${API_BASE}/location`,   // POST - crear una nueva ubicación
    LIST_ALL: `${API_BASE}/location`, // GET - todas las ubicaciones
    BASE: `${API_BASE}/location`,     // útil para componer rutas futuras
};
