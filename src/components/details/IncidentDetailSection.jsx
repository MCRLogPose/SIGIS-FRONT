// src/components/details/IncidentDetailSection.jsx

import DetailHeader from './DetailHeader'
import DetailCharacteristics from './DetailCharacteristics'
import DetailStatus from './DetailStatus'
import DetailLocation from './DetailLocation'
import DetailOperators from './DetailOperators'
import DetailUpdates from './DetailUpdates'
import DetailActions from './DetailActions'
import { useNavigate } from 'react-router-dom'


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


  return (

    <div className="p-6 space-y-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4 border-b-2 border-blue-950">
        <h1 className="text-2xl font-bold text-center mb-4">Detalles de la Incidencia</h1>
      </div>
      {/* Cuarta fila: Acciones */}
      <div className='rounded-xl p-4 flex items-center justify-center w-full min-w-0 border-2 border-blue-950'>
        <DetailActions
          showBackButton
          showApproveButton={isAssigned}
          showRejectButton={isAssigned}
          showAcceptButton={isAssigned}
          showDelegateButton={isAssigned}
          showKeepButton={isAssigned}
          onBack={handleBack}
          onApprove={handleApprove}
          onReject={handleReject}
          onAccept={handleAccept}
          onDelegate={handleDelegate}
          onKeep={handleKeep}
        />
      </div>
      {/* Header e imagen al costado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 aling-items-center  ">
          <div className="rounded-xl p-4 border-2">
            <DetailHeader
              title={incident.title}
              description={incident.description}
            />
            {/* Primera fila: Características */}
            <DetailCharacteristics incident={incident} />
          </div>

          {/* Segunda fila: Estado + Ubicación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className='border-2 rounded-xl p-4'>
              <DetailStatus status={incident.status} />
            </div>
            <div className='border-2 rounded-xl p-2'>
              <DetailLocation location={incident.location} floor={incident.floor} building={incident.building} reference={incident.reference} />
            </div>
          </div>
        </div>

        <div className="rounded-xl p-4 flex items-center justify-center border-2 border-blue-950">
          {/* Imagen u otro bloque de contenido visual */}
          <img
            src={incident.imageUrl}
            alt="Incidencia"
            className="rounded-xl object-contain"
            style={{ maxWidth: '220px', maxHeight: '220px', width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Tercera fila: Tabla de operadores + actualizaciones */}
      {isAssigned && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 border-2 rounded-xl p-4">
            <DetailOperators operators={incident.operators} />
          </div>
          <div className="lg:col-span-2 border-2 rounded-xl p-4">
            {/* Actualizaciones */}
            <DetailUpdates updates={incident.updates} />
          </div>
        </div>
      )}
    </div>

  )

}

export default IncidentDetailSection