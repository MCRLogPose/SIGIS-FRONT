// src/pages/accounts/RegisterPage.jsx

import { useState } from "react";
import StepOneForm from "@/components/forms/accounts/StepOneForm";
import StepTwoForm from "@/components/forms/accounts/StepTwoForm";
import GenericButton from "@/components/cammon/buttons/GenericButton";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { registerUser } from "@/api/service/authService";
import { showErrorAlert, showSuccessAlert } from "@/utils/alerts";
import { showConfirmationAlert, showMissingFieldsAlert } from "../../utils/alerts";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    secondLastName: "",
    documentType: "",
    documentNumber: "",
    phone: "",
    gender: "",

    // Step 2
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    rol: "",
    specialty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value !== "" ? value : "", // fuerza controlado
    }));
  };

  const mapToRegisterRequest = (data) => ({
    nombre: data.firstName,
    apellidos: `${data.lastName} ${data.secondLastName}`.trim(),
    telefono: data.phone,
    dni: data.documentNumber,
    username: data.username,
    password: data.password,
    correo: data.email,
    especialidad: data.rol === "operador" ? data.specialty : null,
    tipoRol: data.rol || null,
  });

  const handleSubmit = async (e) => {
    if (step !== 2) return; // Solo ejecutar cuando esté en el paso final

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return showErrorAlert("Passwords do not match.");
    }

    try {
      const requestBody = mapToRegisterRequest(formData);
      await registerUser(requestBody);
      showSuccessAlert("User successfully registered.");
      setFormData({});
      setStep(1);
    } catch (error) {
      const message = error?.response?.data?.message || "Unexpected error.";
      if (message.includes("username")) {
        showErrorAlert("The username is already in use. Try another.");
      } else if (message.includes("correo")) {
        showErrorAlert("The email is already in use. Try another.");
      } else if (message.includes("especialidad")) {
        showErrorAlert("Specialty is required for role 'operador'.");
      } else {
        showErrorAlert("Registration failed: " + message);
      }
    }
  };

  const navigate = useNavigate();

  const handleCancel = async() => {
    const result = await showConfirmationAlert("¿Estás seguro de cancelar el registro?");
    if (result.isConfirmed) {
      setFormData({});
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-500 to-slate-800 text-white">
      <div className="max-w-2xl w-full p-6 bg-transparent border border-slate-500 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <StepOneForm formData={formData} onChange={handleChange} />
          ) : (
            <StepTwoForm formData={formData} onChange={handleChange} />
          )}

          {step === 2 && (
            <div className="mt-6 flex justify-end items-center space-x-2">
              <GenericButton
                type="button"
                onClick={handleCancel}
                variant="destructive"
                icon={X}
              >
                Cancel
              </GenericButton>
              <GenericButton type="submit" variant="secondary" icon={Check}>
                Create Account
              </GenericButton>
            </div>
          )}
        </form>

        {/* Botones del paso 1 fuera del <form> */}
        {step === 1 && (
          <div className="mt-6 flex justify-between items-center">
            <GenericButton
              type="button"
              onClick={handleCancel}
              variant="destructive"
              icon={X}
            >
              Cancel
            </GenericButton>
            <GenericButton
              type="button"
              onClick={() => {
                const requiredFields = ['firstName', 'lastName', 'documentNumber', 'phone', 'documentType', 'gender'];
                const fieldLabels = {
                  firstName: 'Nombre',
                  lastName: 'Primer Apellido',
                  documentNumber: 'Documento',
                  phone: 'Teléfono',
                  documentType: 'Tipo de Documento',
                  gender: 'Género'
                };

                const missingFields = requiredFields.filter(
                  field => !formData[field] || formData[field].trim() === ''
                );

                if (missingFields.length > 0) {
                  showMissingFieldsAlert(missingFields, fieldLabels);
                  return;
                }

                setStep(2);
              }}
              variant="default"
              icon={ArrowRight}
            >
              Next
            </GenericButton>
          </div>
        )}



      </div>
    </div>
  );
};

export default RegisterPage;
