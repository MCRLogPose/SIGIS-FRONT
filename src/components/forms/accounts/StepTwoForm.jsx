// src/components/forms/accounts/StepTwoForm.jsx

import InputField from "@/components/forms/generic/InputField";
import SelectField from "@/components/forms/generic/SelectField";
import useIsAdmin from "@/hooks/auth/useIsAdmin";

const StepTwoForm = ({ formData, onChange }) => {
  const isAdmin = useIsAdmin();
  const showSpecialty = formData.rol === "operador";

  return (
    <>
      <InputField label="Correo Electrónico" name="email" type="email" value={formData.email} onChange={onChange} placeholder="ejemplo@dominio.com"/>
      <InputField label="Nombre de Usuario" name="username" type="text" value={formData.username} onChange={onChange} placeholder="nombreusuario123"/>
      <InputField label="Contraseña" name="password" type="password" value={formData.password} onChange={onChange} placeholder="tu_contraseña_segura"/>
      <InputField label="Confirmar Contraseña" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={onChange} placeholder="confirma_tu_contraseña_segura"/>

      {isAdmin && (
        <SelectField
          label="Rol"
          name="rol"
          value={formData.rol}
          onChange={onChange}
          options={[
            { value: "", label: "Seleccione un rol" },
            { value: "reportador", label: "Reportador" },
            { value: "operador", label: "Operador" },
          ]}
        />
      )}

      {isAdmin && showSpecialty && (
        <SelectField
          label="Especialidad"
          name="specialty"
          value={formData.specialty}
          onChange={onChange}
          options={[
            { value: "", label: "Seleccione una especialidad" },
            { value: "limpieza", label: "Limpieza" },
            { value: "seguridad", label: "Seguridad" },
            { value: "sistemas", label: "Sistemas" },
          ]}
        />
      )}
    </>
  );
};

export default StepTwoForm;
