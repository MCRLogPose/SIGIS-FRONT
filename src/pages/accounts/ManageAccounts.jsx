import React, {useState} from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import TablePaginator from '@/components/tables/TablePaginator';
import GenericTable from '@/components/tables/GenericTable';
import { usePagination } from '@/hooks/usePagination';
import TableToolbar from '@/components/tables/TableToolbar';


const ManageAccount = () => {
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'nameuser', label: 'Nombre' },
        { key: 'fullname', label: 'Apellidos' },
        { key: 'cedula', label: 'Cédula' },
        { key: 'phone', label: 'Teléfono' },
        { key: 'email', label: 'Correo' },
        { key: 'username', label: 'Usuario' },
        { key: 'role', label: 'Rol' },
        {
            key: 'status', label: 'Estado', render: (value) => (
                <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ACTIVA' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {value}
                </span>
            )
        },

        // más columnas según la vista
    ]

    const data = [
        { id: '00001', nameuser: 'Edwin Manuel', fullname: 'Cruz Rivera', cedula: '71257332', phone: '987654321', email: 'man@gmail.com', username: 'M122322', role: 'ADMIN' , status: 'INACTIVA' },
        { id: '00002', nameuser: 'Edwin Manuel', fullname: 'Cruz Rivera', cedula: '71257332', phone: '987654321', email: 'man@gmail.com', username: 'M122322', role: 'REPORTER', status: 'ACTIVA' },
        { id: '00003', nameuser: 'Edwin Manuel', fullname: 'Cruz Rivera', cedula: '71257332', phone: '987654321', email: 'man@gmail.com', username: 'M122322', role: 'ADMIN', status: 'INACTIVA' },
        { id: '00004', nameuser: 'Edwin Manuel', fullname: 'Cruz Rivera', cedula: '71257332', phone: '987654321', email: 'man@gmail.com', username: 'M122322', role: 'OPERATOR', status: 'ACTIVA' },
        { id: '00005', nameuser: 'Edwin Manuel', fullname: 'Cruz Rivera', cedula: '71257332', phone: '987654321', email: 'man@gmail.com', username: 'M122322', role: 'ADMIN', status: 'ACTIVA' },
        { id: '00006', nameuser: 'Edwin Manuel', fullname: 'Cruz Rivera', cedula: '71257332', phone: '987654321', email: 'man@gmail.com', username: 'M122322', role: 'OPERATOR', status: 'INACTIVA' },
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
                <h1 className="text-2xl font-bold">Gestionar cuentas</h1>
                <p className="text-sm text-gray-500 mb-6">Casos o incidencias cuyo estado ya es culminado</p>

                <div className="shadow-lg max-w">
                    <TableToolbar />
                    <GenericTable columns={columns} data={paginatedData} />
                    <TablePaginator
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={setRowsPerPage}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}

export default ManageAccount