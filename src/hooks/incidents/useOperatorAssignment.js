import { useState } from 'react';
import { getOperators } from '@/api/service/incidentService';
import { assignUsersToIncidency } from '@/api/service/assignmentService';
import { showSuccessAlert, showErrorAlert } from '@/utils/alerts';

export const useOperatorAssignment = (refreshIncidents) => {
  const [operators, setOperators] = useState([]);
  const [selectedOperators, setSelectedOperators] = useState([]);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [currentIncidentId, setCurrentIncidentId] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);

  const openAssignModal = async (incidentId) => {
    setCurrentIncidentId(incidentId);
    setIsAssignModalOpen(true);
    if (operators.length === 0) {
      try {
        const response = await getOperators();
        setOperators(response);
      } catch (error) {
        console.error('Error cargando operadores:', error);
      }
    }
  };

  const closeAssignModal = () => {
    setIsAssignModalOpen(false);
    setSelectedOperators([]);
    setCurrentIncidentId(null);
  };

  const toggleOperatorSelect = (operator) => {
    setSelectedOperators((prev) => {
      const exists = prev.some((op) => op.id === operator.id);
      return exists
        ? prev.filter((op) => op.id !== operator.id)
        : [...prev, { id: operator.id }];
    });
  };

  const openResponseModal = () => {
    setIsResponseModalOpen(true);
  };

  const closeResponseModal = () => {
    setIsResponseModalOpen(false);
    setResponseText('');
  };

  const confirmAssignOperators = async () => {
    if (!currentIncidentId || selectedOperators.length === 0) {
      showErrorAlert('Seleccione una incidencia y al menos un operador.');
      return;
    }

    const groupRequest = {
      incidencyId: currentIncidentId,
      userIds: selectedOperators.map(op => op.id),
      response: String(responseText)
    };

    try {
      await assignUsersToIncidency(groupRequest);
      await showSuccessAlert('Operadores asignados correctamente.');
      await refreshIncidents();
      closeResponseModal();
      closeAssignModal();
    } catch (error) {
      console.error('Error al asignar operadores:', error);
      await showErrorAlert('No se pudo asignar la incidencia.');
    }
  };

  return {
    operators,
    selectedOperators,
    isAssignModalOpen,
    openAssignModal,
    closeAssignModal,
    toggleOperatorSelect,
    confirmAssignOperators,
    // Para la respuesta
    isResponseModalOpen,
    openResponseModal,
    closeResponseModal,
    responseText,
    setResponseText
  };
};
