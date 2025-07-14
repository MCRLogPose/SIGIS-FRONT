// routes/historyRoutes.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const HistoryRoutes = {
  CREATE: `${API_BASE}/assignment-history`, // POST
  LIST_ALL: (id) => `${API_BASE}/assignment-history/assignment/${id}`, // GET
};
