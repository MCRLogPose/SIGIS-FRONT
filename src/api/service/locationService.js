// src/api/service/locationService.js

import axios from 'axios'
import { LocationRoutes } from '../routes';

export const createLocation = async (formData) => {
  try {
    const token = localStorage.getItem('token')
    const requestBody = {
      reference: formData.reference,        // el backend espera 'descripcion'
      pavilion: formData.pavilion,
      floor: parseInt(formData.floor, 10),
    }

    const response = await axios.post(LocationRoutes.CREATE, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data // Contiene el ID de la ubicación creada
  } catch (error) {
    console.error('Error creating location:', error)
    throw error
  }
}
