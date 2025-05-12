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
        {evidence && (
            <div className="mt-2">
                <p className="text-sm">Archivo seleccionado: {evidence.name}</p>
                <img
                    src={URL.createObjectURL(evidence)}
                    alt="Vista previa"
                    className="mt-2 max-w-full h-auto border border-gray-300 rounded"
                />
            </div>
        )}
    </div>
)
}

export default IncidentEvidenceUploader
