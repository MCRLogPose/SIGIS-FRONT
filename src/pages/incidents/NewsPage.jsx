// src/pages/incidents/NewsPage.jsx

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

const NewsPage = () => {
  const { user } = useAuth()
  const currentUserId = user?.id
  console.log('Current User ID:', currentUserId)

  const [newIncidents, setNewIncidents] = useState([])
  const [assignedIncidents, setAssignedIncidents] = useState([])

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [incidents, assignments] = await Promise.all([
          getAllIncidents(),
          getGroupedAssignments()
        ])

        const assignedIncidenceIds = assignments
          .filter(a => a.assigned.some(op => op.userId === currentUserId))
          .map(a => a.incidencyId)

        const newList = incidents.filter(i =>
          !assignments.some(a => a.incidencyId === i.id)
        )

        const assignedList = incidents.filter(i =>
          assignedIncidenceIds.includes(i.id)
        )

        setNewIncidents(newList)
        setAssignedIncidents(assignedList)

      } catch (error) {
        console.error('Error al obtener incidencias:', error)
      }
    }

    if (currentUserId) {
      fetchData()
    }
  }, [currentUserId])

  const pathSeeMore = '/home/incident-detail/:id'

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
                imageUrl={incident.image}
                toSeeMore={pathSeeMore.replace(':id', incident.id)}
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
                buttonTitle1="ACEPTAR"
                buttonTitle2="RECHAZAR"
                toSeeMore={pathSeeMore.replace(':id', incident.id)}
              />
            ))}
            <ShowMoreButton onClick={toggleAssignedExpand} isExpanded={isAssignedExpanded} />
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default NewsPage
