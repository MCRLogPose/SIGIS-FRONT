import React, { useRef, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import NewIncidentCard from '@/components/incidents/cards/NewIncidentCard'
import GenericIncidentCard from '@/components/incidents/cards/GenericIncidentCard'
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton'
import AssignmentResponseModal from '@/components/cammon/modals/AssignmentResponseModal'

import useResponsiveCardLimit from '@/hooks/ui/useResponsiveCardLimit'
import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand'
import { useAuth } from '@/context/AuthContext'
import { createAssignment, updateAssignmentResponse } from '@/api/service/assignmentService'
import { useNewsIncidents } from '@/hooks/incidents/useNewsIncidents'
import { showErrorAlert, showSuccessAlert } from '@/utils/alerts'
import { createAssignmentHistory } from '@/api/service/historyService'

const NewsPage = () => {
  const { user } = useAuth()
  const currentUserId = user?.id

  const [responseText, setResponseText] = useState('');

  const {
    newIncidents,
    assignedIncidents,
    setNewIncidents,
    setAssignedIncidents,
    fetchIncidentsData,
    loading
  } = useNewsIncidents(currentUserId)

  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false)
  const [currentAssignmentId, setCurrentAssignmentId] = useState(null)

  const gridContainerRef = useRef(null)
  const maxCards = useResponsiveCardLimit(gridContainerRef)

  const {
    isExpanded,
    visibleItems,
    toggleExpand
  } = useToggleListExpand(newIncidents, maxCards)

  const {
    isExpanded: isAssignedExpanded,
    visibleItems: visibleAssignedItems,
    toggleExpand: toggleAssignedExpand
  } = useToggleListExpand(assignedIncidents, 3)

  const visibleNewIncidents = isExpanded
    ? visibleItems
    : visibleItems.slice(0, maxCards)

  const visibleAssignedIncidents = isAssignedExpanded
    ? visibleAssignedItems
    : visibleAssignedItems.slice(0, 3)

  const handleAcceptIncident = async (incidentId) => {
    try {
      await createAssignment({ userId: currentUserId, incidencyId: incidentId })

      const accepted = newIncidents.find(i => i.id === incidentId)
      setNewIncidents(prev => prev.filter(i => i.id !== incidentId))
      setAssignedIncidents(prev => [...prev, accepted])

      showSuccessAlert('Incidencia asignada correctamente.')
    } catch (error) {
      console.error('Error al aceptar la incidencia:', error)
      showErrorAlert('No se pudo asignar la incidencia.')
    }
  }

  const openResponseModal = (assignmentId) => {
    setCurrentAssignmentId(assignmentId)
    setIsResponseModalOpen(true)
  }

  const closeResponseModal = () => {
    setIsResponseModalOpen(false)
    setCurrentAssignmentId(null)
    setResponseText('')
  }

  const handleResponseSubmit = async (responseText) => {
    if (!currentAssignmentId) {
      showErrorAlert('Asignación no válida.')
      return
    }

    try {
      if (!responseText?.trim()) {
        showErrorAlert('La respuesta no puede estar vacía.');
        return;
      }

      await updateAssignmentResponse(currentAssignmentId, responseText)
      await createAssignmentHistory({
        response: responseText,
        state: "en proceso",
        assignmentId: currentAssignmentId,
        userId: currentUserId,
      });

      showSuccessAlert('Respuesta actualizada exitosamente.')
      closeResponseModal()
      fetchIncidentsData()
    } catch (error) {
      console.error('Error actualizando respuesta:', error)
      showErrorAlert('Error al actualizar la respuesta.')
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        {/* Incidencias nuevas */}
        <section>
          <h2 className="text-2xl font-bold">INCIDENCIAS NUEVAS</h2>
          <p className="text-sm text-gray-500 mb-4">Incidencias sin asignación</p>
          <div
            ref={gridContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {visibleNewIncidents.map(incident => (
              <NewIncidentCard
                key={incident.id}
                incident={incident}
                toSeeMore={`/home/incident-detail/${incident.id}?type=incidence`}
                onAccept={() => handleAcceptIncident(incident.id)}
              />
            ))}
          </div>
          <ShowMoreButton onClick={toggleExpand} isExpanded={isExpanded} />
        </section>

        {/* Incidencias asignadas */}
        <section>
          <h2 className="text-2xl font-bold">ASIGNACIONES DE INCIDENCIAS</h2>
          <p className="text-sm text-gray-500 mb-4">Incidencias delegadas a ti</p>
          <div className="space-y-4">
            {visibleAssignedIncidents.map(incident => (
              <GenericIncidentCard
                key={incident.id}
                incident={incident}
                buttonTitle1={incident.state !== 'en proceso' ? 'ACTUALIZAR' : null}
                onButton1Click={() => openResponseModal(incident.assignmentId)}
                toSeeMore={`/home/incident-detail/${incident.id}?type=assignment`}
              />
            ))}
            <ShowMoreButton onClick={toggleAssignedExpand} isExpanded={isAssignedExpanded} />
          </div>
        </section>

        {/* Modal para actualizar respuesta */}
        <AssignmentResponseModal
          isOpen={isResponseModalOpen}
          onClose={closeResponseModal}
          onSubmit={handleResponseSubmit}
          responseText={responseText}
          setResponseText={setResponseText}
        />
      </div>
    </DashboardLayout>
  )
}

export default NewsPage
