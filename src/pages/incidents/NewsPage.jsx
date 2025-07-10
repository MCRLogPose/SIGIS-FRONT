import React, { useEffect, useRef, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import NewIncidentCard from '@/components/incidents/cards/NewIncidentCard'
import GenericIncidentCard from '@/components/incidents/cards/GenericIncidentCard'
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton'
import useResponsiveCardLimit from '@/hooks/ui/useResponsiveCardLimit'
import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand'
import { getAllIncidents } from '@/api/service/incidentService'
import { getGroupedAssignments } from '@/api/service/assignmentService'
import { useAuth } from '@/context/AuthContext'
import { createAssignment, updateAssignmentResponse } from '@/api/service/assignmentService'
import AssignmentResponseModal from '@/components/cammon/modals/AssignmentResponseModal'
import { showErrorAlert, showSuccessAlert } from '@/utils/alerts'

const NewsPage = () => {
  const { user } = useAuth()
  const currentUserId = user?.id

  const [newIncidents, setNewIncidents] = useState([])
  const [assignedIncidents, setAssignedIncidents] = useState([])

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

  const pathSeeMore = '/home/incident-detail/:id'

  const fetchData = async () => {
    try {
      const [incidents, assignments] = await Promise.all([
        getAllIncidents(),
        getGroupedAssignments()
      ])

      // Mapear assignmentId por incidencia asignada al operador actual
      const assignmentMap = new Map()
      assignments.forEach(group => {
        const match = group.assigned.find(op => op.userId === currentUserId)
        if (match) {
          assignmentMap.set(group.incidencyId, match.assignmentId)
        }
      })

      // Incidencias nuevas: sin ninguna asignación
      const newList = incidents.filter(i =>
        !assignments.some(a => a.incidencyId === i.id)
      )

      // Incidencias asignadas al operador actual
      const assignedList = incidents
        .filter(i => assignmentMap.has(i.id))
        .map(i => ({
          ...i,
          assignmentId: assignmentMap.get(i.id)
        }))
        .filter(i => i.state !== 'Completado')

      setNewIncidents(newList)
      setAssignedIncidents(assignedList)
    } catch (error) {
      console.error('Error al obtener incidencias:', error)
    }
  }

  useEffect(() => {
    if (currentUserId) {
      fetchData()
    }
  }, [currentUserId])

  const handleAcceptIncident = async (incidentId) => {
    try {
      await createAssignment({
        userId: currentUserId,
        incidencyId: incidentId
      })

      // Remover de nuevas y mover a asignadas
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
  }

  const handleResponseSubmit = async (responseText) => {
    if (!currentAssignmentId) {
      showErrorAlert('Asignación no válida.')
      return
    }

    try {
      await updateAssignmentResponse(currentAssignmentId, responseText)
      showSuccessAlert('Respuesta actualizada exitosamente.')
      closeResponseModal()
      fetchData()
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
                toSeeMore={pathSeeMore.replace(':id', incident.id)}
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
                imageUrl={incident.image}
                buttonTitle1={incident.state !== 'en proceso' ? 'ACTUALIZAR' : null}
                onButton1Click={() => openResponseModal(incident.assignmentId)}
                toSeeMore={pathSeeMore.replace(':id', incident.id)}
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
        />
      </div>
    </DashboardLayout>
  )
}

export default NewsPage
