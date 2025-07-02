import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable';
import { usePagination } from '@/hooks/pagination/usePagination';
import IncidentModal from '@/components/cammon/modals/IncidentModal';
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal';
import { getAllIncidents } from '../../api/service/incidentService';
import { useNavigate } from 'react-router-dom';

const formatIncident = (incident) => ({
    id: incident.id || '',
    title: incident.title || '',
    description: incident.description || '',
    issueDate: incident.dateEmision ? new Date(incident.dateEmision).toLocaleDateString() : '',
    priority: incident.priority ? incident.priority.toUpperCase() : '',
    aceptanceDate: incident.dateAccept ? new Date(incident.dateAccept).toLocaleDateString() : '',
    completionDate: incident.dateCompletion ? new Date(incident.dateCompletion).toLocaleDateString() : '',
    status: incident.state ? (incident.state === 'Pendiente' ? 'ACTIVA' : incident.state.toUpperCase()) : '',
    category: incident.categoryId || '',
    operators: incident.userId || '',
    // Agrega más campos si es necesario
});

const ViewIncidentReports = () => {
    const navigate = useNavigate()

    const handleRowDoubleClick = (incident) => {
        navigate(`/home/incident-detail/${incident.id}`)
    }

    const {
        isModalOpen,
        formData,
        handleChange,
        handleSubmit,
        openModal,
        closeModal
    } = useIncidentModal();

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Titulo' },
        { key: 'description', label: 'Descripción' },
        { key: 'issueDate', label: 'Fecha de Emisión' },
        {
            key: 'priority', label: 'Prioridad', render: (value) => (
                <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ALTA' ? 'bg-red-100 text-red-800' : value === 'MEDIA' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {value}
                </span>
            )
        },
        { key: 'aceptanceDate', label: 'Fecha de Aceptación' },
        { key: 'completionDate', label: 'Fecha de Finalizaciòn' },
        {
            key: 'status', label: 'Estado', render: (value) => (
                <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ACTIVA' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {value}
                </span>
            )
        },
        { key: 'category', label: 'Categoría' },
        { key: 'operators', label: 'Operarios' },
    ];

    const [incidents, setIncidents] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const apiData = await getAllIncidents(); // Cambia 'Completado' por el tipo que necesites

                // Si la API devuelve un array:
                const formatted = Array.isArray(apiData)
                    ? apiData.map(formatIncident)
                    : [formatIncident(apiData)];
                setIncidents(formatted);
            } catch (error) {
                console.error('Error al obtener incidencias:', error);
            }
        };
        fetchIncidents();
    }, []);

    // Paginación usando incidents
    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage
    } = usePagination(incidents, rowsPerPage);

    return (
        <DashboardLayout>
            <div className="max-w-1lg mx-auto p-4">
                <h1 className="text-2xl font-bold">REPORTES DE INCIDENCIAS</h1>
                <p className="text-sm text-gray-500 mb-6">Casos o incidencias cuyo estado ya es culminado</p>
                <div className="shadow-lg max-w">
                    <TableToolbar onNewClick={openModal} />
                    <GenericTable columns={columns} data={paginatedData} onRowDoubleClick={handleRowDoubleClick}/>
                    <TablePaginator
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={setRowsPerPage}
                    />
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

export default ViewIncidentReports;