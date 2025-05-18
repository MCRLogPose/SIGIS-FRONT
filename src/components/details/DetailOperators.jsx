import { React, useState } from 'react';
import TablePaginator from '@/components/tables/TablePaginator';
import GenericTable from '@/components/tables/GenericTable';
import { usePagination } from '@/hooks/usePagination';

const DetailOperators = ({ operators }) => {
    if (!operators || operators.length === 0) return null

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'fullName', label: 'Nombre completo' },
        { key: 'username', label: 'Usuario' },
        { key: 'specialty', label: 'Especialidad' },
    ]

    const [rowsPerPage, setRowsPerPage] = useState(3)

    const {
        currentPage,
        totalPages,
        paginatedData:operatorsData,
        setCurrentPage
    } = usePagination(operators, rowsPerPage)
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Técnicos asignados</h2>
            <GenericTable columns={columns} data={operatorsData || []} />
            <TablePaginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={setRowsPerPage}
            />
        </div>
    )
}

export default DetailOperators