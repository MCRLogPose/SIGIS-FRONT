// src/hooks/incidents/useIncidentModal.js

import { useEffect, useState } from 'react'
import { createLocation } from '@/api/service/locationService'
import { createIncident } from '@/api/service/incidentService'
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
    categoryId: '', // matches backend naming
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  useEffect(() => {
    if (isModalOpen) {
      setFormData({
        title: '',
        pavilion: '',
        floor: '',
        reference: '',
        description: '',
        evidence: null,
        categoryId: '',
      });
    }
  }, [isModalOpen]);

  const handleSubmit = async () => {
    const requiredFields = ['title', 'pavilion', 'floor', 'reference', 'description', 'evidence', 'categoryId']
    const fieldLabels = {
      title: 'Título',
      pavilion: 'Pabellón',
      floor: 'Piso',
      reference: 'Referencia',
      description: 'Descripción',
      evidence: 'Evidencia',
      categoryId: 'Categoría',
    }

    const missingFields = validateIncidentForm(formData, requiredFields)
    if (missingFields.length > 0) {
      await showMissingFieldsAlert(missingFields, fieldLabels)
      return
    }
    try {
      console.log('Form data before API call:', formData)
      const locationResponse = await createLocation({
        reference: formData.reference,
        pavilion: formData.pavilion,
        floor: formData.floor,
      })

      const locationId = locationResponse.id
      const token = localStorage.getItem('token')

      // Step 2: Prepare incident data
      const incidentData = {
        title: formData.title,
        description: formData.description,
        dateEmision: new Date().toISOString(),
        priority: 'Alta',
        image: formData.evidence,
        dateAccept: '',
        state: 'Pendiente',
        categoryId: Number(formData.categoryId),
        locationId: locationId,
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
