// src/pages/incidents/AssignCases.jsx

import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import TablePaginator from '@/components/cammon/tables/TablePaginator'
import GenericTable from '@/components/cammon/tables/GenericTable'
import TableToolbar from '@/components/cammon/tables/TableToolbar'
import { usePagination } from '@/hooks/pagination/usePagination'
import GenericIncidentCard from '@/components/incidents/cards/GenericIncidentCard'
import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand'
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton'
import IncidentModal from '@/components/cammon/modals/IncidentModal'
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal'

const AssignCases = () => {

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
                id: 1,
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
        { key: 'description', label: 'Descripción' },
        { key: 'location', label: 'Ubicación' },
        { key: 'issueDate', label: 'Fecha de Emisión' },

        {
            key: 'status', label: 'Estado', render: (value) => (
                <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ACTIVA' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {value}
                </span>
            )
        },
        { key: 'category', label: 'Categoría' },
        { key: 'reporter', label: 'Reportador' },
        // más columnas según la vista
    ]

    const data = [
        { id: '00001', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', status: 'PENDIENTE', category: 'SEGURIDAD', reporter: 'M222221' },
        { id: '00002', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', status: 'PENDIENTE', category: 'SEGURIDAD', reporter: 'M222222' },
        { id: '00003', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', status: 'PENDIENTE', category: 'SEGURIDAD', reporter: 'M222221' },
        { id: '00004', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', status: 'PENDIENTE', category: 'SEGURIDAD', reporter: 'M223321' },
        { id: '00005', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', status: 'PENDIENTE', category: 'SEGURIDAD', reporter: 'M222221' },
        { id: '00006', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', status: 'PENDIENTE', category: 'SEGURIDAD', reporter: 'M222221' },      // gory: 'SEGURIDAD', operators: 'Miguel12' },
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
                    <h2 className="text-2xl font-bold">INCIDENCIAS CON MAYOR PRIORIDAD - POR ASIGNAR</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias por asignar a operarios de alta prioridad</p>
                    <div className="space-y-4">
                        {visibleGenericIncidents.map((incident) => (
                            <GenericIncidentCard
                                key={incident.id}
                                incident={incident}
                                imageUrl={incident.imageUrl}
                                buttonTitle1="DELEGAR"
                                buttonTitle2="RECHAZAR"
                                toSeeMore={pathSeeMore.replace(':id', incident.id)}
                            />
                        ))}
                        <ShowMoreButton onClick={toggleGenericExpand} isExpanded={isGenericExpanded} />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">INCIDENCIAS GENERALES - POR DELEGAR</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias por asignar, vista general</p>
                    <div>
                        <TableToolbar onNewClick={openModal} />
                        <GenericTable columns={columns} data={paginatedData} />
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

export default AssignCases