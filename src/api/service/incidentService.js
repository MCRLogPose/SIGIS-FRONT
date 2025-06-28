// src/api/service/incidentService.js

import axios from 'axios'
import { IncidentRoutes } from '../routes'

export const createIncident = async (incidentData, token) => {
  const formData = new FormData()

  formData.append('title', incidentData.title)
  formData.append('description', incidentData.description)
  formData.append('dateEmision', incidentData.dateEmision)
  formData.append('priority', incidentData.priority)
  formData.append('image', incidentData.image)
  formData.append('dateAccept', incidentData.dateAccept)
  formData.append('state', incidentData.state)
  formData.append('categoryId', incidentData.categoryId)
  formData.append('locationId', incidentData.locationId)

  const response = await axios.post('http://localhost:8080/api/incidents', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const getAllIncidents = () =>
  axios.get(IncidentRoutes.LIST_ALL);

export const getIncidentsCompleted = () =>
  axios.get(IncidentRoutes.COMPLETED);

export const getIncidentsCulminadas = () =>
  axios.get(IncidentRoutes.CULMINADAS);

export const getIncidentsUsers = () =>
  axios.get(IncidentRoutes.USERS);