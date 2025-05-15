import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import IncidentReportsTable from '@/components/tables/IncidentReportsTable';
import IncidentReportsToolbar from '@/components/tables/IncidentReportsToolbar';
import TablePaginator from '@/components/tables/TablePaginator';

const ViewIncidentReports = () => {
    return (
        <DashboardLayout>
            <div className="max-w-1lg mx-auto p-4">
                <h1 className="text-2xl font-bold">Gestionar cuentas</h1>
                <p className="text-sm text-gray-500 mb-6">Casos o incidencias cuyo estado ya es culminado</p>

            <div className="shadow-lg max-w">
                <IncidentReportsToolbar />
                <IncidentReportsTable />
                <TablePaginator currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)} />
            </div>
        </div>
        </DashboardLayout>
    );
}

export default ViewIncidentReports;