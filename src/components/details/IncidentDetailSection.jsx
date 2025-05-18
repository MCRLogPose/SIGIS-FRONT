import React from 'react'
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

  const isAssigned = incident.operator && incident.administrator


  return (

    <div className="p-6 space-y-6">
      {/* Header e imagen al costado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 aling-items-center  ">
          <div className="bg-blue-950 text-white rounded-xl p-4">
            <DetailHeader
              title={incident.title}
              description={incident.description}
            />
            <DetailCharacteristics incident={incident} />
          </div>

          {/* Segunda fila: Estado + Ubicación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <DetailStatus status={incident.status} />
            <DetailLocation location={incident.location} floor={incident.floor} building={incident.building} reference={incident.reference} />
          </div>
        </div>

        <div className="bg-blue-950 text-white rounded-xl p-4 flex items-center justify-center">
          {/* Imagen u otro bloque de contenido visual */}
          <img
            src={incident.imageUrl}
            alt="Incidencia"
            className="rounded-xl object-contain"
            style={{ maxWidth: '220px', maxHeight: '220px', width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Tercera fila: Tabla de operadores + Acciones */}
      {isAssigned && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <DetailOperators operators={incident.operators} />
          </div>
          <div className="lg:col-span-2">
            {/* Actualizaciones */}
            <DetailUpdates updates={incident.updates} />
          </div>
        </div>
      )}

      {/* Cuarta fila: Acciones */}
      <div className='bg-blue-950 text-white rounded-xl p-4 flex items-center justify-center w-full min-w-0'>
        <DetailActions
          showBackButton
          showApproveButton={isAssigned}
          showRejectButton={isAssigned}
          onBack={handleBack}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>

    </div>

  )

}

export default IncidentDetailSection