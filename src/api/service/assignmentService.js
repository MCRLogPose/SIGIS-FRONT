// src/api/service/assignmentService.js
import axios from 'axios';
import { AssignmentRoutes } from '../routes';

export const createAssignment = async (data, token) => {
  const response = await axios.post(AssignmentRoutes.CREATE, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllAssignments = () =>
  axios.get(AssignmentRoutes.LIST_ALL);

export const getGroupedAssignments = () =>
  axios.get(AssignmentRoutes.GROUPED);

export const getAssignmentsByIncidence = (id) =>
  axios.get(AssignmentRoutes.BY_INCIDENCE(id));

export const updateAssignmentResponse = (id, response, token) =>
  axios.put(
    AssignmentRoutes.UPDATE_RESPONSE(id),
    { response },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const culminateAssignment = (id, token) =>
  axios.put(
    AssignmentRoutes.CULMINATE(id),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
