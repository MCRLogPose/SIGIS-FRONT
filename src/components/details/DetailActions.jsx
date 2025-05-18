import React from 'react'
import GenericButton from '@/components/buttons/GenericButton' // Asumiendo que usas Shadcn o similar

const DetailActions = ({
  showBackButton = true,
  showApproveButton = false,
  showRejectButton = false,
  onBack,
  onApprove,
  onReject
}) => {
  return (
    <div className="text-center items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Acciones</h2>
      <div className="flex flex-wrap justify-end gap-4 mt-6">
        {showBackButton && (
          <GenericButton variant="secondary" onClick={onBack}>
            Volver
          </GenericButton>
        )}
        {showRejectButton && (
          <GenericButton variant="destructive" onClick={onReject}>
            Rechazar
          </GenericButton>
        )}
        {showApproveButton && (
          <GenericButton variant="default" onClick={onApprove}>
            Aprobar
          </GenericButton>
        )}
      </div>
    </div>
  )
}

export default DetailActions