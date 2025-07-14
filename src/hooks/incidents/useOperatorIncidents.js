// src/hooks/incidents/useOperatorIncidents.js

import { useEffect, useState } from 'react'
import { getAllIncidents } from '@/api/service/incidentService'
import { getGroupedAssignments } from '@/api/service/assignmentService'

export const useOperatorIncidents = (currentUserId) => {
  const [newIncidents, setNewIncidents] = useState([])
  const [assignedIncidents, setAssignedIncidents] = useState([])

  const fetchIncidentsData = async () => {
    try {
      const [incidents, assignments] = await Promise.all([
        getAllIncidents(),
        getGroupedAssignments()
      ])

      const assignmentMap = new Map()
      assignments.forEach(group => {
        const match = group.assigned.find(op => op.userId === currentUserId)
        if (match) {
          assignmentMap.set(group.incidencyId, match.assignmentId)
        }
      })

      const newList = incidents.filter(i =>
        !assignments.some(a => a.incidencyId === i.id)
      )

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
      fetchIncidentsData()
    }
  }, [currentUserId])

  return {
    newIncidents,
    assignedIncidents,
    setNewIncidents,
    setAssignedIncidents,
    fetchIncidentsData
  }
}
