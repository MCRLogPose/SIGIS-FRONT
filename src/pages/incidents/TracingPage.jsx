// src/pages/incidents/TracingPage.jsx

import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable'
import TableToolbar from '@/components/cammon/tables/TableToolbar'
import { usePagination } from '@/hooks/pagination/usePagination'
import GenericIncidentCard from '@/components/incidents/cards/GenericIncidentCard'
import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand'
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton'
import IncidentModal from '@/components/cammon/modals/IncidentModal'
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal'
import { useNavigate } from 'react-router-dom';


const TracingPage = () => {
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
    } = useIncidentModal()

    const pathSeeMore = '/home/incident-detail/:id'
    const [genericIncidents, setGenericIncidents] = useState([])

    const {
        isExpanded: isGenericExpanded,
        visibleItems: visibleGenericItems,
        toggleExpand: toggleGenericExpand
    } = useToggleListExpand(genericIncidents, 2)
    const visibleGenericIncidents = isGenericExpanded
        ? visibleGenericItems
        : visibleGenericItems.slice(0, 2)


    useEffect(() => {
        setGenericIncidents([
            {
                id: 2,
                title: 'Caño roto, baño de hombres',
                description: 'Se reparo el caño, sin embargo se dispone de material para culminarlo',
                date: '06 / 01 / 2021',
                administrator: 'Juan Segarra',
                location: 'A0302',
                category: 'SEGURIDAD',
                reporter: 'U222231',
                imageUrl: ImageDashboardOptions
            },
            // más casos...
        ])
    }, [])

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Titulo' },
        { key: 'location', label: 'Ubicación' },
        { key: 'issueDate', label: 'Fecha de Emisión' },
        { key: 'acceptanceDate', label: 'Fecha de Aceptación' },
        { key: 'completionDate', label: 'Fecha de Finalizaciòn' },
        { key: 'observation', label: 'Observación' },

        {
            key: 'status', label: 'Estado', render: (value) => (
                <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ACTIVA' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {value}
                </span>
            )
        },
        { key: 'category', label: 'Categoría' },
        { key: 'operators', label: 'Operarios' },
        // más columnas según la vista
    ]

    const data = [
        { id: '00001', title: 'Lorem Ipsum Dolor', location: 'A0302', issueDate: '31/12/2022', acceptanceDate: '31/12/2022', completionDate: '31/12/2022', observation: 'Lorem Ipsum Dolor Sit Amet', status: 'EN PROCESO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00002', title: 'Lorem Ipsum Dolor', location: 'A0302', issueDate: '31/12/2022', acceptanceDate: '31/12/2022', completionDate: '31/12/2022', observation: 'Lorem Ipsum Dolor Sit Amet', status: 'EN PROCESO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00003', title: 'Lorem Ipsum Dolor', location: 'A0302', issueDate: '31/12/2022', acceptanceDate: '31/12/2022', completionDate: '31/12/2022', observation: 'Lorem Ipsum Dolor Sit Amet', status: 'EN PROCESO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00004', title: 'Lorem Ipsum Dolor', location: 'A0302', issueDate: '31/12/2022', acceptanceDate: '31/12/2022', completionDate: '31/12/2022', observation: 'Lorem Ipsum Dolor Sit Amet', status: 'EN PROCESO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00005', title: 'Lorem Ipsum Dolor', location: 'A0302', issueDate: '31/12/2022', acceptanceDate: '31/12/2022', completionDate: '31/12/2022', observation: 'Lorem Ipsum Dolor Sit Amet', status: 'EN PROCESO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00006', title: 'Lorem Ipsum Dolor', location: 'A0302', issueDate: '31/12/2022', acceptanceDate: '31/12/2022', completionDate: '31/12/2022', observation: 'Lorem Ipsum Dolor Sit Amet', status: 'EN PROCESO', category: 'SEGURIDAD', operators: 'Miguel12' },
        //
        // más filas...
    ]

    const [rowsPerPage, setRowsPerPage] = useState(5)

    const {
        currentPage,
        totalPages,
        paginatedData,
        setCurrentPage
    } = usePagination(data, rowsPerPage)

    return (
        <DashboardLayout>
            <div className="p-6 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold">ACTUALIZACIONES DE CASOS ACTIVOS</h2>
                    <p className="text-sm text-gray-500 mb-4">Solicitudes de asignacion por parte de los administradores</p>
                    <div className="space-y-4">
                        {visibleGenericIncidents.map((incident) => (
                            <GenericIncidentCard
                                key={incident.id}
                                incident={incident}
                                imageUrl={incident.imageUrl}
                                buttonTitle1="APROBAR"
                                buttonTitle2="MANTENER"
                                toSeeMore={pathSeeMore.replace(':id', incident.id)}
                            />
                        ))}
                    </div>
                    <ShowMoreButton onClick={toggleGenericExpand} isExpanded={isGenericExpanded} />
                </section>

                <section>
                    <h2 className="text-2xl font-bold">INCIDENCIAS NUEVAS</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias por parte de los usuarios</p>
                    <div>
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
                </section>
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

export default TracingPage