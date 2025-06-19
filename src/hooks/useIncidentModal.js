import { useState } from 'react'
import { createLocation } from '@/api/locationRegister'
import { createIncident } from '@/api/incidenciaRegister'
import { validateIncidentForm } from '@/utils/validation'
import { showMissingFieldsAlert, showSuccessAlert, showErrorAlert } from '@/utils/alerts'

export const useIncidentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    pavilion: '',
    floor: '',
    reference: '',
    description: '',
    evidence: null,
    categoriaId: '', // matches backend naming
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    const requiredFields = ['title', 'pavilion', 'floor', 'reference', 'description', 'evidence', 'categoriaId']
    const fieldLabels = {
      title: 'Título',
      pavilion: 'Pabellón',
      floor: 'Piso',
      reference: 'Referencia',
      description: 'Descripción',
      evidence: 'Evidencia',
      categoriaId: 'Categoría',
    }

    const missingFields = validateIncidentForm(formData, requiredFields)
    if (missingFields.length > 0) {
      await showMissingFieldsAlert(missingFields, fieldLabels)
      return
    }
    try {
      // Step 1: Create location and get ID
      const locationResponse = await createLocation({
        referencia: formData.reference,
        pabellon: formData.pavilion,
        piso: formData.floor,
      })

      const locationId = locationResponse.id
      const token = localStorage.getItem('token')

      // Step 2: Prepare incident data
      const incidentData = {
        title: formData.title,
        descripcion: formData.description,
        fechaEmision: new Date().toISOString(),
        prioridad: 'Alta',
        imagen: formData.evidence,
        fechaAccept: '',
        estado: 'Pendiente',
        categoriaId: Number(formData.categoriaId),
        ubicacionId: locationId,
      }

      // Step 3: Submit incident
      const response = await createIncident(incidentData, token)
      await showSuccessAlert('Incidencia registrada exitosamente')
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error creating incident:', error)
      await showErrorAlert('No se pudo registrar la incidencia.')
    }
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return {
    isModalOpen,
    formData,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  }
}
