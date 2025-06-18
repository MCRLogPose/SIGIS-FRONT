// src/components/forms/accounts/StepOneForm.jsx
import InputField from "./InputField";
import SelectField from "./SelectField";

const StepOneForm = ({ formData, onChange }) => {
  return (
    <>
      <InputField label="Nombre" name="firstName" value={formData.firstName} onChange={onChange} placeholder="ej. Juan" />
      <InputField label="Primer Apellido" name="lastName" value={formData.lastName} onChange={onChange} placeholder="ej. Pérez" />
      <InputField label="Segundo Apellido" name="secondLastName" value={formData.secondLastName} onChange={onChange} placeholder="ej. Rivera"/>
      <SelectField
        label="Tipo de Documento"
        name="documentType"
        value={formData.documentType}
        onChange={onChange}
        options={[
          { value: '', label: 'Seleccione' },
          { value: 'dni', label: 'DNI' },
          { value: 'passport', label: 'Pasaporte' },
          { value: 'other', label: 'Otro' }
        ]}
      />
      <InputField label="Documento" name="documentNumber" value={formData.documentNumber} onChange={onChange} placeholder="ej. 77777777" />
      <InputField label="Teléfono" name="phone" value={formData.phone} onChange={onChange} placeholder="ej. 999999999" />
      <SelectField
        label="Género"
        name="gender"
        value={formData.gender}
        onChange={onChange}
        options={[
          { value: '', label: 'Seleccione' },
          { value: 'male', label: 'Masculino' },
          { value: 'female', label: 'Femenino' },
          { value: 'other', label: 'Otro' }
        ]}
      />
    </>
  );
}

export default StepOneForm;