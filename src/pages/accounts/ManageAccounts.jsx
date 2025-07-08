// src/pages/accounts/ManageAccounts.jsx

import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable';
import { usePagination } from '@/hooks/pagination/usePagination';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../../api/service/incidentService';


const ManageAccount = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/accounts/register-user')
    }

    const pathCreate = '/accounts/register-user'
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
            <div className="max-w-1lg mx-auto p-4">
                <h1 className="text-2xl font-bold">Gestionar cuentas</h1>
                <p className="text-sm text-gray-500 mb-6">Casos o incidencias cuyo estado ya es culminado</p>

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
        </DashboardLayout>
    );
}

export default ManageAccount