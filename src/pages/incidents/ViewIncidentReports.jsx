import { React, useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import TableToolbar from '@/components/tables/TableToolbar';
import TablePaginator from '@/components/tables/TablePaginator';
import GenericTable from '@/components/tables/GenericTable';
import { usePagination } from '@/hooks/usePagination';
import IncidentModal from '@/components/modals/IncidentModal'
import { useIncidentModal } from '@/hooks/useIncidentModal'

const ViewIncidentReports = () => {
    const {
        isModalOpen,
        formData,
        handleChange,
        handleSubmit,
        openModal,
        closeModal
    } = useIncidentModal()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Titulo' },
        { key: 'description', label: 'Descripción' },
        { key: 'location', label: 'Ubicación' },
        { key: 'issueDate', label: 'Fecha de Emisión' },
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
        // más columnas según la vista
    ]

    const data = [
        { id: '00001', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', completionDate: '31/12/2022', status: 'CULMINADO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00002', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', completionDate: '31/12/2022', status: 'CULMINADO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00003', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', completionDate: '31/12/2022', status: 'CULMINADO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00004', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', completionDate: '31/12/2022', status: 'CULMINADO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00005', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', completionDate: '31/12/2022', status: 'CULMINADO', category: 'SEGURIDAD', operators: 'Miguel12' },
        { id: '00006', title: 'Lorem Ipsum Dolor', description: 'Lorem Ipsum Dolor Sit Amet', location: 'A0302', issueDate: '31/12/2022', completionDate: '31/12/2022', status: 'CULMINADO', category: 'SEGURIDAD', operators: 'Miguel12' },
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
            <div className="max-w-1lg mx-auto p-4">
                <h1 className="text-2xl font-bold">REPORTES DE INCIDENCIAS</h1>
                <p className="text-sm text-gray-500 mb-6">Casos o incidencias cuyo estado ya es culminado</p>

                <div className="shadow-lg max-w">
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
}

export default ViewIncidentReports;