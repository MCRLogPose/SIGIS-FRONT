// src/hooks/incidents/useAssignmentActions.js

import { markAssignmentCulminated, updateAssignmentResponse } from '@/api/service/assignmentService';
import { createAssignmentHistory } from '@/api/service/historyService';
import { useRef, useState } from 'react';
import { showConfirmationAlert } from '../../utils/alerts';

export const useAssignmentActions = (currentUserId, refreshCallback) => {
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [responseText, setResponseText] = useState('');
  const selectedAssignmentIdRef = useRef(null); 

  const handleAccept = async (assignmentId) => {
    
    try {
      await markAssignmentCulminated(assignmentId);
      await createAssignmentHistory({
        response: "Asignación culminada correctamente",
        state: "culminado",
        assignmentId,
        userId: currentUserId
      });

      if (refreshCallback) refreshCallback();
      await showConfirmationAlert("Validado con exito.")
    } catch (error) {
      console.error("Error al aceptar la asignación:", error);
    }
  };

  const openRejectModal = (assignmentId) => {
    selectedAssignmentIdRef.current = assignmentId;
    setIsResponseModalOpen(true);
  };

  const closeRejectModal = () => {
    selectedAssignmentIdRef.current = null;
    setResponseText('');
    setIsResponseModalOpen(false);
  };

  const handleRejectSubmit = async () => {
    const assignmentId = selectedAssignmentIdRef.current;
    if (!assignmentId) return;
    
    try {
      await updateAssignmentResponse(assignmentId, responseText);

      await createAssignmentHistory({
        response: responseText,
        state: "asignado",
        assignmentId: assignmentId,
        userId: currentUserId
      });

      closeRejectModal();
      if (refreshCallback) refreshCallback();
    } catch (error) {
      console.error("Error al rechazar la asignación:", error);
    }
  };

  return {
    handleAccept,
    openRejectModal,
    closeRejectModal,
    isResponseModalOpen,
    responseText,
    setResponseText,
    handleRejectSubmit
  };
};
