import React from 'react'

const IncidentEvidenceUploader = ({ evidence, onChange }) => {
  return (
    <div>
      <label className="block font-semibold mb-1">Evidencia</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onChange(e.target.files[0])}
        className="w-full border border-gray-400 rounded p-2"
      />
      {evidence && <p className="text-sm mt-2">Archivo seleccionado: {evidence.name}</p>}
    </div>
  )
}

export default IncidentEvidenceUploader
