import React, { useState } from 'react'
import IncidentFieldGroup from '@/components/forms/IncidentFieldGroup'
import IncidentEvidenceUploader from '@/components/forms/IncidentEvidenceUploader'
import IncidentFormActions from '@/components/forms/IncidentFormActions'
import DashboardLayout from '@/layouts/DashboardLayout'

const CreateIncident = () => {
  const [formData, setFormData] = useState({
    title: '',
    pavilion: '',
    floor: '',
    reference: '',
    description: '',
    evidence: null
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log('Enviando formulario:', formData)
    // aquí va la lógica con fetch/axios
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-1">NUEVA INCIDENCIA</h1>
        <p className="text-center text-sm text-gray-500 mb-8">Describa y detalle la incidencia</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IncidentFieldGroup formData={formData} onChange={handleChange} />
          <IncidentEvidenceUploader evidence={formData.evidence} onChange={(file) => handleChange('evidence', file)} />
        </form>

        <IncidentFormActions onSubmit={handleSubmit} />
      </div>
    </DashboardLayout>
  )
}

export default CreateIncident