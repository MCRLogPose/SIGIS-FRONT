// src/components/details/IncidentDetailSection.jsx

import DetailHeader from './DetailHeader'
import DetailCharacteristics from './DetailCharacteristics'
import DetailStatus from './DetailStatus'
import DetailLocation from './DetailLocation'
import DetailOperators from './DetailOperators'
import DetailUpdates from './DetailUpdates'
import DetailActions from './DetailActions'
import { useNavigate } from 'react-router-dom'
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';

const IncidentDetailSection = ({ incident }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1) // Vuelve a la página anterior
  }

  const handleApprove = () => {
    // Lógica de aprobación (placeholder)
    console.log('Aprobado incidente:', incident.id)
  }

  const handleReject = () => {
    // Lógica de rechazo (placeholder)
    console.log('Rechazado incidente:', incident.id)
  }

  const handleAccept = () => {
    // Lógica de aceptación (placeholder)
    console.log('Aceptado incidente:', incident.id)
  }

  const handleDelegate = () => {
    // Lógica de delegación (placeholder)
    console.log('Delegado incidente:', incident.id)
  }

  const handleKeep = () => {
    // Lógica de mantener (placeholder)
    console.log('Mantenido incidente:', incident.id)
  }

  // Verifica si el incidente tiene un operador y un administrador asignados
  const isAssigned = incident.operator && incident.administrator
  console.log("es asignado", isAssigned);

  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'http://localhost:8080/images/';
  const fullImageUrl = incident.imageUrl ? `${IMAGE_BASE_URL}${incident.imageUrl}` : null;
  const displayImage = fullImageUrl || DefaultImage;

  return (
    <div className="p-6 space-y-6 bg-neutral-800/90 rounded-lg shadow-md text-gray-200">

      <div className="flex items-center justify-center mb-4 border-b-2 border-indigo-900">
        <h1 className="text-2xl font-bold text-center mb-4">Detalles de la Incidencia</h1>
      </div>

      {/* Header e imagen al costado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 aling-items-center  ">
          <div className="rounded-xl p-4 border-2 border-indigo-900">
            <DetailHeader
              title={incident.title}
              description={incident.description}
            />
            {/* Primera fila: Características */}
            <DetailCharacteristics incident={incident} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className='border-2 rounded-xl p-4 border-indigo-900'>
              <DetailStatus status={incident.status} />
            </div>

            <div className='border-2 rounded-xl p-4 border-indigo-900'>
              <DetailLocation location={incident.location} />
            </div>
          </div>

          {isAssigned && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="lg:col-span-2 border-2 rounded-xl p-4 border-indigo-900">
                <DetailOperators operators={incident.operators} />
              </div>
              <div className="lg:col-span-2 border-2 rounded-xl p-4 border-indigo-900">
                {/* Actualizaciones */}
                <DetailUpdates updates={incident.updates} />
              </div>
            </div>
          )}

        </div>


        <div className="rounded-xl p-4 flex items-center justify-center border-2 border-indigo-800 h-full w-full">
          <img
            src={displayImage}
            alt="Incidencia"
            className="rounded-xl object-cover w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <hr className='mt-15 border-2 border-indigo-900'/>

      {/* Cuarta fila: Acciones */}
      <div className="flex justify-center items-center w-full">
        <div className="rounded-xl p-4 flex items-center justify-center min-w-0 lg:w-1/3 w-full">
          <DetailActions
            showBackButton
            showApproveButton={isAssigned}
            showRejectButton={!isAssigned}
            showAcceptButton={isAssigned}
            showDelegateButton={!isAssigned}
            showKeepButton={isAssigned}
            onBack={handleBack}
            onApprove={handleApprove}
            onReject={handleReject}
            onAccept={handleAccept}
            onDelegate={handleDelegate}
            onKeep={handleKeep}
          />

        </div>
      </div>
    </div>

  )

}

export default IncidentDetailSection