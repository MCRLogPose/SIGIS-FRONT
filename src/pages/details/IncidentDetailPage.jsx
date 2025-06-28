// src/pages/details/IncidentDetailPage.jsx

import { useParams } from 'react-router-dom'
import IncidentDetailSection from '@/components/details/IncidentDetailSection'
import DashboardLayout from '@/layouts/DashboardLayout'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'

// Dummy de prueba
const dummyIncidents = [
    {
        id: 2,
        title: 'Silla rota',
        description: 'Se reporta silla inestable en aula A001',
        location: 'A001',
        floor: '1',
        building: 'A',
        reference: 'Cerca de la ventana',
        reporter: 'U22222',
        phone: '987654321',
        category: 'MOBILIARIO',
        imageUrl: ImageDashboardOptions,
        administrator: 'Juan Torres',
        operator: 'Carlos Pérez',
        status: 'EN PROCESO',
        emissionDate: '2024-10-10',
        acceptanceDate: '2024-10-11',
        updateDate: '2024-10-13',
        endDate: '2024-10-14',
        assignedDate: '2024-10-12',
        updates: [
            { date: '2024-10-12', user: 'Juan Torres', comment: 'Incidencia asignada a Carlos Pérez' },
            { date: '2024-10-13', user: 'Carlos Pérez', comment: 'Reparación en curso' },
            { date: '2024-10-14', user: 'Carlos Pérez', comment: 'Reparación completada' },
            { date: '2024-10-15', user: 'Juan Torres', comment: 'Incidencia cerrada' },

        ],
        operators: [
            {
                id: '0001',
                name: 'Carlos',
                fullName: 'Carlos Pérez',
                username: 'OP1234',
                specialty: 'Reparación'
            },
            {
                id: '0002',
                name: 'Ana',
                fullName: 'Ana Gómez',
                username: 'OP5678',
                specialty: 'Mantenimiento'
            },
            {
                id: '0003',
                name: 'Luis',
                fullName: 'Luis Martínez',
                username: 'OP9101',
                specialty: 'Electricidad'
            },
            {
                id: '0004',
                name: 'María',
                fullName: 'María López',
                username: 'OP1121',
                specialty: 'Plomería'
            },
        ]
    },
    // Puedes agregar más objetos aquí para simular diferentes casos
]

const IncidentDetailPage = () => {
    const { id } = useParams()
    const incident = dummyIncidents.find((i) => i.id === parseInt(id))

    if (!incident) return <p className="p-4 text-red-500">Incidencia no encontrada</p>

    return (
        <DashboardLayout>
            <IncidentDetailSection incident={incident} />
        </DashboardLayout>
    )
}

export default IncidentDetailPage
