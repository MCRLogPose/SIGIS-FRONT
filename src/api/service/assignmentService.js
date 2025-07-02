// src/api/service/assignmentService.js
import api from './apiService';
import { AssignmentRoutes } from '../routes';

export const createAssignment = async (data) => {
  const response = await api.post(AssignmentRoutes.CREATE, data);
  return response.data;
};

export const getAllAssignments = () =>
  api.get(AssignmentRoutes.LIST_ALL);

export const getGroupedAssignments = () =>
  api.get(AssignmentRoutes.GROUPED);

export const getAssignmentsByIncidence = (id) =>
  api.get(AssignmentRoutes.BY_INCIDENCE(id));

export const updateAssignmentResponse = (id, response) =>
  api.put(
    AssignmentRoutes.UPDATE_RESPONSE(id),
    { response }
  );

export const culminateAssignment = (id) =>
  api.put(
    AssignmentRoutes.CULMINATE(id),
    {}
  );
