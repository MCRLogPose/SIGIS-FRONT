import React, { useState } from 'react'
import IncidentFieldGroup from '@/components/forms/IncidentFieldGroup'
import IncidentEvidenceUploader from '@/components/forms/IncidentEvidenceUploader'
import IncidentFormActions from '@/components/forms/IncidentFormActions'
import DashboardLayout from '@/layouts/DashboardLayout'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'

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

      <div>
        <div className="max-w-6xl mx-auto p-8 md:ml-14">
          <h1 className="text-4xl font-bold text-center mb-2">NUEVA INCIDENCIA</h1>
          <p className="text-center text-lg text-gray-500 mb-15">Describa y detalle la incidencia</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IncidentFieldGroup formData={formData} onChange={handleChange} />
            <IncidentEvidenceUploader evidence={formData.evidence} onChange={(file) => handleChange('evidence', file)} />
          </form>

          <IncidentFormActions onSubmit={handleSubmit} />
        </div>
        <img src={ImageDashboardOptions} alt="Dashboard Options" className="absolute bottom-80 right-0 w-[350px] h-auto" />
      </div>

    </DashboardLayout>
  )
}

export default CreateIncident