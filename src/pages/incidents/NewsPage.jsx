import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import NewIncidentCard from '@/components/cards/NewIncidentCard'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import AssignmentIncidentCard from '@/components/cards/AssignmentIncidentCard'
import GenericIncidentCard from '@/components/cards/GenericIncidentCard'

const NewsPage = () => {
    const [newIncidents, setNewIncidents] = useState([])
    const [genericIncidents, setGenericIncidents] = useState([])

    useEffect(() => {
        // Simulación de datos
        setNewIncidents([
            {
                id: 1,
                title: 'Silla rota A00304',
                description: 'Se registra una computadora en mal estado',
                date: '06 / 01 / 2021',
                location: 'A00304',
                imageUrl: ImageDashboardOptions
            },
            // más casos...
        ])

        setGenericIncidents([
            {
                id: 2,
                title: 'Caño roto, baño de hombres',
                description: 'Se reparo el caño, sin embargo se dispone de material para culminarlo',
                date: '06 / 01 / 2021',
                administrator: 'Juan Segarra',
                imageUrl: ImageDashboardOptions
            },
            // más casos...
        ])
    }, [])

    return (
        <DashboardLayout>
            <div className="p-6 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold">INCIDENCIAS NUEVAS</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias generadas por los usuarios</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {newIncidents.map((incident) => (
                            <NewIncidentCard
                                key={incident.id}
                                incident={incident}
                                imageUrl={ImageDashboardOptions}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">ASIGNACIONES DE INCIDENCIAS</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias asignadas por los administradores</p>
                    <div className="space-y-4">
                        {genericIncidents.map((incident) => (
                            <GenericIncidentCard
                                key={incident.id}
                                incident={incident}
                                imageUrl={incident.imageUrl}
                                buttonTitle1="ACEPTAR"
                                buttonTitle2="RECHAZAR"
                            />
                        ))}
                    </div>
                </section>
            </div>
        </DashboardLayout>
    )
}

export default NewsPage