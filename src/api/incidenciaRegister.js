import axios from 'axios'

export const createIncident = async (incidentData, token) => {
  const formData = new FormData()

  formData.append('title', incidentData.title)
  formData.append('descripcion', incidentData.descripcion)
  formData.append('fechaEmision', incidentData.fechaEmision)
  formData.append('prioridad', incidentData.prioridad)
  formData.append('imagen', incidentData.imagen)
  formData.append('fechaAccept', incidentData.fechaAccept)
  formData.append('estado', incidentData.estado)
  formData.append('categoriaId', incidentData.categoriaId)
  formData.append('ubicacionId', incidentData.ubicacionId)

  const response = await axios.post('http://localhost:8080/api/incidencias', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
