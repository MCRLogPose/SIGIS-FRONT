import { Trash2 } from 'lucide-react'
import React from 'react'

//src/components/forms/incidents/IncidentEvidenceUploader.jsx
const IncidentEvidenceUploader = ({ evidence, onChange }) => {
    const handleRemove = () => {
        onChange(null)
    }

    return (
        <div className="flex flex-col gap-2 text-white">
            <label className="block font-semibold mb-1 ">Evidencia</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => onChange(e.target.files[0])}
                className="w-full border border-gray-400 rounded p-2"
            />

            {evidence && (
                <div className="mt-2 flex flex-col items-center text-white">
                    <p className="text-sm text-center ">Archivo seleccionado: {evidence.name}</p>
                    <img
                        src={URL.createObjectURL(evidence)}
                        alt="Vista previa"
                        className="mt-2 max-w-full h-auto border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleRemove}
                        className="mt-2 text-sm text-red-600 hover:underline flex items-center justify-center"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            )}
        </div>
    )
}

export default IncidentEvidenceUploader
