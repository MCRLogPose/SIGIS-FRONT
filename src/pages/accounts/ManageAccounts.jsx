// src/pages/accounts/ManageAccounts.jsx

import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable';
import { usePagination } from '@/hooks/pagination/usePagination';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import { useNavigate } from 'react-router-dom'
import { getUsers } from '@/api/service/incidentService';


const ManageAccount = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/accounts/register-user')
    }

    const pathCreate = '/accounts/register-user'
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'nombre', label: 'Nombre' },
        { key: 'apellidos', label: 'Apellidos' },
        { key: 'dni', label: 'Dni' },
        { key: 'telefono', label: 'Teléfono' },
        { key: 'correo', label: 'Correo' },
        { key: 'rol', label: 'Rol' },
        {
            key: 'status', label: 'Estado', render: (value) => (
                <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ACTIVA' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {value}
                </span>
            )
        },

        // más columnas según la vista
    ]

    const [tableIncidents, setTableUsers] = useState([]);

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(
        tableIncidents,
        rowsPerPage
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUsers();
                setTableUsers(userData);
            } catch (error) {
                console.error('Error al cargar incidencias:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DashboardLayout>
            <div className="max-w-1lg mx-auto p-4 space-y-20">
                <div>
                    <h1 className="text-2xl font-bold">Cuentas de Usuario</h1>
                    <p className="text-sm text-gray-500 mb-6">Cuentas genericas de usuarios comunes</p>

                    <div className="shadow-lg max-w">
                        <TableToolbar onNewClick={handleRedirect} />
                        <GenericTable columns={columns}
                            data={paginatedData}
                        />
                        <TablePaginator
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={setRowsPerPage}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">Cuentas de Operarios</h1>
                    <p className="text-sm text-gray-500 mb-6">Cuentas para operarios dentro de la universidad</p>

                    <div className="shadow-lg max-w">
                        <TableToolbar onNewClick={handleRedirect} />
                        <GenericTable columns={columns}
                            data={paginatedData}
                        />
                        <TablePaginator
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={setRowsPerPage}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default ManageAccount