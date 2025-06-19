import axios from 'axios'

//src/api/locationRegister.js
export const createLocation = async (formData) => {
  try {
    const requestBody = {
      descripcion: formData.reference,        // el backend espera 'descripcion'
      pabellon: formData.pavilion,
      piso: parseInt(formData.floor, 10),
    }

    const response = await axios.post('http://localhost:8080/ubicacion', requestBody)
    return response.data // Contiene el ID de la ubicación creada
  } catch (error) {
    console.error('Error creating location:', error)
    throw error
  }
}
