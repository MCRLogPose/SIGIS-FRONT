// src/utils/alerts.js

import Swal from 'sweetalert2'

export const showMissingFieldsAlert = (missingFields, fieldLabels) => {
  return Swal.fire({
    icon: 'warning',
    title: 'Campos incompletos',
    background: '#1f2937',
    html: `

    <div class="text-sm bg-yellow-100 text-yellow-800 p-4 rounded-lg">
      <p>Faltan algunos campos obligatorios en el formulario:</p>
      <p class="mt-2">Por favor completa los siguientes campos:</p>
    </div>
    <ul class="text-left mt-2 text-sm text-gray-400">
      ${missingFields.map(field => `<li>• ${fieldLabels[field]}</li>`).join('')}
    </ul>
    `,
    confirmButtonText: 'Entendido',
    customClass: {
      popup: 'text-sm',
    }
  })
}

export const showSuccessAlert = (message = 'Operación exitosa') => {
  return Swal.fire({
    icon: 'success',
    background: '#1f2937',
    title: message,
    confirmButtonText: 'Aceptar'
  })
}

export const showErrorAlert = (message = 'Ocurrió un error') => {
  return Swal.fire({
    icon: 'error',
    background: '#1f2937',
    title: 'Error',
    text: message,
    confirmButtonText: 'Aceptar'
  })
}
