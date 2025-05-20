// src/components/form/StepOneForm.jsx
import InputField from "./InputField";
import SelectField from "./SelectField";

const StepOneForm = ({ formData, onChange }) => {
  return (
    <>
      <InputField label="Nombre" name="nombre" value={formData.nombre} onChange={onChange} placeholder="Ej. Juan" />
      <InputField label="Primer Apellido" name="apellido1" value={formData.apellido1} onChange={onChange} />
      <InputField label="Segundo Apellido" name="apellido2" value={formData.apellido2} onChange={onChange} />
      <SelectField
        label="Tipo de Documento"
        name="tipoDocumento"
        value={formData.sexo}
        onChange={onChange}
        options={[
          { value: '', label: 'Seleccione' },
          { value: 'dni', label: 'DNI' },
          { value: 'passport', label: 'Pasaporte' },
          { value: 'otro', label: 'Otro' }
        ]}
      />
      <InputField label="Número de Documento" name="documento" value={formData.documento} onChange={onChange} />
      <InputField label="Teléfono" name="telefono" value={formData.telefono} onChange={onChange} />
      <SelectField
        label="Sexo"
        name="sexo"
        value={formData.sexo}
        onChange={onChange}
        options={[
          { value: '', label: 'Seleccione' },
          { value: 'masculino', label: 'Masculino' },
          { value: 'femenino', label: 'Femenino' },
          { value: 'otro', label: 'Otro' }
        ]}
      />
    </>
  );
}

export default StepOneForm;