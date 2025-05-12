import React, { useState, useEffect } from 'react'
import IncidentCard from '@/components/IncidentCard'
import DashboardLayout from '@/layouts/DashboardLayout'
import IncidentReportsToolbar from '@/components/tables/IncidentReportsToolbar'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'

const imageUrl = [ImageDashboardOptions]

const ActiveIncidents = () => {
    const [incidents, setIncidents] = useState([])

    useEffect(() => {
        // Aquí cargarás los casos desde la API más adelante
        setIncidents([
            {
                id: 1,
                title: 'Caño roto, baño de hombres',
                description: 'Se reparó el caño, sin embargo se dispone de material para culminarlo...',
                date: '06/01/2021',
                pavilion: 'Torre B',
                floor: 3,
                reporter: 'Juan Segarra',
                imageUrl: ImageDashboardOptions
            },
            {
                id: 2,
                title: 'Caño roto, baño de hombres',
                description: 'Se reparó el caño, sin embargo se dispone de material para culminarlo...',
                date: '06/01/2021',
                pavilion: 'Torre B',
                floor: 3,
                reporter: 'Juan Segarra',
                imageUrl: ImageDashboardOptions
            }
        ])
    }, [])

    return (
        <DashboardLayout>
            <div className="mx-auto p-4">
                <h1 className="text-2xl font-bold">CASOS ACTIVOS</h1>
                <p className="text-sm text-gray-500 mb-6">Casos activos, que manifiestan la última actualización de estos</p>

                <IncidentReportsToolbar />

                <div className="flex flex-col gap-6 mt-4">
                    {incidents.map((incident, idx) => (
                        <IncidentCard 
                        key={idx}
                        title={incident.title}
                        description={incident.description}
                        date={incident.date}
                        reporter={incident.reporter}
                        pavilion={incident.pavilion}
                        floor={incident.floor}
                        imageUrl={imageUrl[0]} // Cambia esto por incident.imageUrl si tienes imágenes diferentes
                    />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default ActiveIncidents
