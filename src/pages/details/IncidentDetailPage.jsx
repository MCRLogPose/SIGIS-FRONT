import React from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useParams } from 'react-router-dom'
import IncidentDetailSection from '@/components/details/IncidentDetailSection'

// Simula obtener una incidencia por ID (luego se cambiará a fetch)
const dummyIncidents = [
    {
        id: 2,
        title: 'Silla rota',
        description: '...',
        location: 'A001',
        reporter: 'U22222',
        date: '2024-10-10',
        imageUrl: '',
        // Solo si es asignada
        administrator: 'Juan',
        operator: 'Carlos',
        assignedDate: '2024-10-12',
    },
    // ...
]

const IncidentDetailPage = () => {
    const { id } = useParams()
    const incident = dummyIncidents.find((i) => i.id === parseInt(id))

    if (!incident) return <p>Incidencia no encontrada</p>

    return (
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
                    <IncidentDetailSection incident={incident} />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default IncidentDetailPage