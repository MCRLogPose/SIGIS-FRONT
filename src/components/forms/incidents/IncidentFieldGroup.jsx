import React from 'react'

const IncidentFieldGroup = ({ formData, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block font-semibold mb-1">Título</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="w-full border border-gray-400 rounded p-2"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Pabellón</label>
        <div className="flex gap-4">
          <label><input type="radio" name="pavilion" value="A" onChange={() => onChange('pavilion', 'A')} /> Torre A</label>
          <label><input type="radio" name="pavilion" value="B" onChange={() => onChange('pavilion', 'B')} /> Torre B</label>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Piso</label>
        <input
          type="number"
          min={-2}
          max={8}
          value={formData.floor}
          onChange={(e) => onChange('floor', e.target.value)}
          className="w-full border border-gray-400 rounded p-2"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Referencia</label>
        <input
          type="text"
          value={formData.reference}
          onChange={(e) => onChange('reference', e.target.value)}
          className="w-full border border-gray-400 rounded p-2"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block font-semibold mb-1">Descripción</label>
        <textarea
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          rows={4}
          className="w-full border border-gray-400 rounded p-2"
        />
      </div>
    </div>
  )
}

export default IncidentFieldGroup
