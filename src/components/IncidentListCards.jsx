import React, { useState, useEffect } from 'react'
import IncidentCard from '@/components/cards/IncidentCard'
import DashboardLayout from '@/layouts/DashboardLayout'
import TableToolbar from '@/components/tables/TableToolbar'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import IncidentModal from '@/components/modals/IncidentModal'
import { useIncidentModal } from '@/hooks/useIncidentModal'

const IncidentListCards = ({ title, description, type }) => {
    const {
            isModalOpen,
            formData,
            handleChange,
            handleSubmit,
            openModal,
            closeModal
        } = useIncidentModal()

    const pathSeeMore = '/home/incident-detail/:id'
    const [incidents, setIncidents] = useState([])

    useEffect(() => {
        // Aquí podrías hacer un fetch a la API filtrando por el tipo (activos o culminados)
        // Por ahora simulamos la carga
        const allIncidents = [
            {
                id: 1,
                title: 'Caño roto, baño de hombres',
                description: 'Se reparó el caño, sin embargo se dispone de material para culminarlo...',
                date: '06/01/2021',
                pavilion: 'Torre B',
                floor: 3,
                reporter: 'Juan Segarra',
                imageUrl: ImageDashboardOptions,
                status: 'activo'
            },
            {
                id: 2,
                title: 'Fuga eléctrica',
                description: 'Revisión de cables eléctricos por cortocircuito.',
                date: '05/12/2020',
                pavilion: 'Torre A',
                floor: 2,
                reporter: 'Ana Torres',
                imageUrl: ImageDashboardOptions,
                status: 'culminado'
            }
        ]

        const filtered = allIncidents.filter(incident => incident.status === type)
        setIncidents(filtered)
    }, [type])

    return (
        <DashboardLayout>
            <div className="mx-auto p-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-sm text-gray-500 mb-6">{description}</p>

                <TableToolbar onNewClick={openModal} />

                <div className="flex flex-col gap-6 mt-4">
                    {incidents.map((incident) => (
                        <IncidentCard 
                            key={incident.id}
                            title={incident.title}
                            description={incident.description}
                            date={incident.date}
                            reporter={incident.reporter}
                            pavilion={incident.pavilion}
                            floor={incident.floor}
                            imageUrl={incident.imageUrl}
                            toSeeMore={pathSeeMore.replace(':id', incident.id)}
                        />
                    ))}
                </div>
                <IncidentModal
                                    isOpen={isModalOpen}
                                    onClose={closeModal}
                                    formData={formData}
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                />
            </div>
        </DashboardLayout>
    )
}

export default IncidentListCards