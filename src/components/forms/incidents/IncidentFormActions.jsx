// src/components/forms/incidents/IncidentFormActions.jsx

import { useNavigate } from 'react-router-dom'

const IncidentFormActions = ({ onSubmit }) => {
  const navigate = useNavigate()

  return (
    <div className="mt-8 flex justify-between">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
      >
        Volver
      </button>
      <button
        onClick={onSubmit}
        type="button"
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
      >
        Solicitar
      </button>
    </div>
  )
}

export default IncidentFormActions
