// src/components/cammon/modals/IncidentModal.jsx

import IncidentFieldGroup from '@/components/forms/incidents/IncidentFieldGroup'
import IncidentEvidenceUploader from '@/components/forms/incidents/IncidentEvidenceUploader'
import GenericButton from '@/components/cammon/buttons/GenericButton'
import { X, Send } from 'lucide-react'

const IncidentModal = ({ isOpen, onClose, formData, onChange, onSubmit }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm text-white">
      <div className="bg-gray-900 p-6 rounded shadow-md w-full max-w-[100vh] max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Nueva Incidencia</h2>
          <GenericButton
            onClick={onClose}
            variant="destructive"
            icon={X}
            className="px-2 py-1"
          >
          </GenericButton>
        </div>

        <div className="overflow-auto flex-1">
          <IncidentFieldGroup formData={formData} onChange={onChange} />
          <div className="mt-4">
            <IncidentEvidenceUploader
              evidence={formData.evidence}
              onChange={(file) => onChange('evidence', file)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <GenericButton onClick={onClose} variant="secondary" icon={X}>
            Cancelar
          </GenericButton>
          <GenericButton onClick={onSubmit} variant="default" icon={Send}>
            Enviar
          </GenericButton>
        </div>
      </div>
    </div>
  )
}

export default IncidentModal

