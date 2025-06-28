// src/components/details/DetailActions.jsx

import GenericButton from '@/components/cammon/buttons/GenericButton'
import { ArrowLeft, BadgeCheck, BadgeX, CheckCircle2, Send, RefreshCw } from 'lucide-react'

const DetailActions = ({
  showBackButton = true,
  showApproveButton = false,
  showRejectButton = false,
  showAcceptButton = false,
  showDelegateButton = false,
  showKeepButton = false,
  onBack,
  onApprove,
  onReject,
  onAccept,
  onDelegate,
  onKeep
}) => {
  return (
    <div className="text-center items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Acciones</h2>
      <div className="flex flex-wrap justify-end gap-4 mt-6">
        {showBackButton && (
          <GenericButton variant="default" onClick={onBack} icon={ArrowLeft}>
            Volver
          </GenericButton>
        )}
        {showRejectButton && (
          <GenericButton variant="destructive" onClick={onReject} icon={BadgeX}>
            Rechazar
          </GenericButton>
        )}
        {showKeepButton && (
          <GenericButton variant="destructive" onClick={onKeep} icon={RefreshCw}>
            Mantener
          </GenericButton>
        )}
        {showApproveButton && (
          <GenericButton variant="secondary" onClick={onApprove} icon={BadgeCheck}>
            Aprobar
          </GenericButton>
        )}
        {showAcceptButton && (
          <GenericButton variant="secondary" onClick={onAccept} icon={CheckCircle2}>
            Aceptar
          </GenericButton>
        )}
        {showDelegateButton && (
          <GenericButton variant="secondary" onClick={onDelegate} icon={Send}>
            Delegar
          </GenericButton>
        )}
      </div>
    </div>
  )
}

export default DetailActions
