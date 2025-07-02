// src/api/service/locationService.js

import api from './apiService';
import { LocationRoutes } from '../routes';

export const createLocation = async (formData) => {
  try {
    const requestBody = {
      reference: formData.reference,        // el backend espera 'descripcion'
      pavilion: formData.pavilion,
      floor: parseInt(formData.floor, 10),
    };

    const response = await api.post(LocationRoutes.CREATE, requestBody);
    return response.data; // Contiene el ID de la ubicación creada
  } catch (error) {
    console.error('Error creating location:', error);
    throw error;
  }
};
