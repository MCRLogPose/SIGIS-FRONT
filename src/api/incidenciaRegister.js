import axios from 'axios'

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
