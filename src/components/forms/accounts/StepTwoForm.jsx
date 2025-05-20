// src/components/form/StepTwoForm.jsx
import InputField from "./InputField";
import SelectField from "./SelectField";

const StepTwoForm = ({ formData, onChange }) => {
  const mostrarEspecialidad = formData.rol === "operador";

  return (
    <>
      <InputField
        label="Correo Electrónico"
        name="correo"
        type="email"
        value={formData.correo}
        onChange={onChange}
        placeholder="ejemplo@dominio.com"
      />
      <InputField
        label="Nombre de Usuario"
        name="usuario"
        value={formData.usuario}
        onChange={onChange}
        placeholder="nombreusuario123"
      />
      <InputField
        label="Contraseña"
        name="contrasena"
        type="password"
        value={formData.contrasena}
        onChange={onChange}
      />
      <InputField
        label="Confirmar Contraseña"
        name="confirmarContrasena"
        type="password"
        value={formData.confirmarContrasena}
        onChange={onChange}
      />
      <SelectField
        label="Rol"
        name="rol"
        value={formData.rol}
        onChange={onChange}
        options={[
          { value: "", label: "Seleccione un rol" },
          { value: "reportador", label: "Reportador" },
          { value: "administrador", label: "Administrador" },
          { value: "operador", label: "Operador" },
        ]}
      />

      {mostrarEspecialidad && (
        <SelectField
          label="Especialidad"
          name="especialidad"
          value={formData.especialidad}
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
}

export default StepTwoForm