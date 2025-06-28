// src/utils/validation.js

export const validateIncidentForm = (formData, requiredFields) => {
  const missingFields = requiredFields.filter(field => !formData[field])
  return missingFields
}
