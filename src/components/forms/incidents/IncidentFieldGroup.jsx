// src/components/forms/incidents/IncidentFieldGroup.jsx

import InputField from "@/components/forms/generic/InputField";
import SelectField from "@/components/forms/generic/SelectField";
import TextareaField from "@/components/forms/generic/TextareaField";
import RadioGroupField from "@/components/forms/generic/RadioGroupField";

const IncidentFieldGroup = ({ formData, onChange }) => {
  const categoryOptions = [
    { id: 1, label: 'Seguridad', value: 'security' },
    { id: 2, label: 'Limpieza', value: 'cleaning' },
    { id: 3, label: 'Tecnologia', value: 'technology' },
    { id: 4, label: 'Otro', value: 'Other' },
  ]

  return (
    <div className="flex flex-col gap-4 text-white">
      <InputField
        label="Título"
        name="title"
        value={formData.title}
        onChange={(e) => onChange('title', e.target.value)}
      />

      <div className="flex gap-4">
        <div className="flex-1">
          <RadioGroupField
            label="Pabellón"
            name="pavilion"
            value={formData.pavilion}
            onChange={(val) => onChange('pavilion', val)}
            options={[
              { label: 'Torre A', value: 'A' },
              { label: 'Torre B', value: 'B' },
            ]}
          />
        </div>

        <div className="flex-1">
          <InputField
            label="Piso"
            name="floor"
            type="number"
            value={formData.floor}
            onChange={(e) => onChange('floor', e.target.value)}
          />
        </div>

        <div className='flex-1'>
          <SelectField
            label="Categoría"
            name="categoryId"
            value={formData.categoryId}
            onChange={(e) => onChange('categoryId', e.target.value)}
            options={categoryOptions.map(opt => ({
              label: opt.label,
              value: opt.id,
            }))}
          />
        </div>
      </div>

      <InputField
        label="Referencia"
        name="reference"
        value={formData.reference}
        onChange={(e) => onChange('reference', e.target.value)}
      />

      <TextareaField
        label="Descripción"
        name="description"
        value={formData.description}
        onChange={(e) => onChange('description', e.target.value)}
      />
    </div>
  )
}

export default IncidentFieldGroup
