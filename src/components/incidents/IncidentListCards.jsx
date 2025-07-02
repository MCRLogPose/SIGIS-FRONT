import React, { useState, useEffect } from 'react';
import { getIncidentsByType } from '@/api/service/incidentService';
import IncidentCard from '@/components/incidents/cards/IncidentCard';
import DashboardLayout from '@/layouts/DashboardLayout';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import IncidentModal from '@/components/cammon/modals/IncidentModal';
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal';

const IncidentListCards = ({ title, description, type }) => {
    const {
        isModalOpen,
        formData,
        handleChange,
        handleSubmit,
        openModal,
        closeModal
    } = useIncidentModal();

    const pathSeeMore = '/home/incident-detail/:id';
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const data = await getIncidentsByType(type);
                setIncidents(data);
            } catch (error) {
                console.error('Error al obtener incidencias:', error);
            }
        };

        fetchIncidents();
    }, [type]);

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
                            incident={incident}
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
    );
};

export default IncidentListCards;
