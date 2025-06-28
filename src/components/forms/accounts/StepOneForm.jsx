// src/components/forms/accounts/StepOneForm.jsx

import InputField from "@/components/forms/generic/InputField";
import SelectField from "@/components/forms/generic/SelectField";

const StepOneForm = ({ formData, onChange }) => {
  return (
    <>
      <InputField label="Nombre" type="text" name="firstName" value={formData.firstName} onChange={onChange} placeholder="ej. Juan" />
      <InputField label="Primer Apellido" type="text" name="lastName" value={formData.lastName} onChange={onChange} placeholder="ej. Pérez" />
      <InputField label="Segundo Apellido" type="text" name="secondLastName" value={formData.secondLastName} onChange={onChange} placeholder="ej. Rivera"/>
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
      <InputField label="Documento" type="text" name="documentNumber" value={formData.documentNumber} onChange={onChange} placeholder="ej. 77777777" />
      <InputField label="Teléfono" type="text" name="phone" value={formData.phone} onChange={onChange} placeholder="ej. 999999999" />
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