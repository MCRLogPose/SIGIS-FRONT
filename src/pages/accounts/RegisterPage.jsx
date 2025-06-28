// src/pages/accounts/RegisterPage.jsx

import { useState } from "react";
import StepOneForm from "@/components/forms/accounts/StepOneForm";
import StepTwoForm from "@/components/forms/accounts/StepTwoForm";
import GenericButton from "@/components/cammon/buttons/GenericButton";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Paso 1
    nombre: "",
    apellido1: "",
    apellido2: "",
    tipoDocumento: "",
    documento: "",
    telefono: "",
    sexo: "",

    // Paso 2
    correo: "",
    usuario: "",
    contrasena: "",
    confirmarContrasena: "",
    rol: "",
    especialidad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la conexión con backend
    console.log("Datos del formulario:", formData);
    alert("Cuenta creada exitosamente (simulado)");
  };

  const handleCancel = () => {
    if (confirm("¿Seguro que deseas cancelar el registro?")) {
      setFormData({});
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-t from-slate-500 to-slate-800 text-white">
      <div className="max-w-2xl w-full p-6 bg-transparent border border-slate-500 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <StepOneForm formData={formData} onChange={handleChange} />
          ) : (
            <StepTwoForm formData={formData} onChange={handleChange} />
          )}

          <div className="mt-6 flex justify-between items-center">
            {step > 1 && (
              <GenericButton
                type="button"
                onClick={() => setStep(step - 1)}
                variant="default"
                icon={ArrowLeft}
              >
                Volver
              </GenericButton>
            )}

            <div className="ml-auto space-x-2 flex">
              <GenericButton
                type="button"
                onClick={handleCancel}
                variant="destructive"
                icon={X}
              >
                Cancelar
              </GenericButton>

              {step === 1 ? (
                <GenericButton
                  type="button"
                  onClick={() => setStep(step + 1)}
                  variant="default"
                  icon={ArrowRight}
                >
                  Siguiente
                </GenericButton>
              ) : (
                <GenericButton
                  type="submit"
                  variant="secondary"
                  icon={Check}
                >
                  Crear Cuenta
                </GenericButton>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage