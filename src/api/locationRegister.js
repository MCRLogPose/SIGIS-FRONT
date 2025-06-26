import axios from 'axios'

//src/api/locationRegister.js
export const createLocation = async (formData) => {
  try {
    const token = localStorage.getItem('token')
    const requestBody = {
      reference: formData.reference,        // el backend espera 'descripcion'
      pavilion: formData.pavilion,
      floor: parseInt(formData.floor, 10),
    }

    const response = await axios.post('http://localhost:8080/api/location', requestBody, {
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
