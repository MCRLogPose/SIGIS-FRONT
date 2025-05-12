import React from 'react';
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png';
import DashboardLayout from '@/layouts/DashboardLayout';
import IncidentReportsTable from '@/components/tables/IncidentReportsTable';
import IncidentReportsToolbar from '@/components/tables/IncidentReportsToolbar';
import TablePaginator from '@/components/tables/TablePaginator';

const ViewIncidentReports = () => {
    return (
        <DashboardLayout>
            <div className="flex items-center justify-between mt-4">
                <div className='ml-13'>
                    <h1 className="text-3xl font-bold">REPORTES DE INCIDENCIAS</h1>
                    <p className="text-m font-bold mb-2 text-gray-700">Casos o incidencias cuyo estado ya es culminado</p>
                </div>
                <img src={ImageDashboardOptions} alt="Dashboard Options" className="absolute bottom-01 right-0 w-[100px] h-auto mr-20 mb-8" />
            </div>

            <hr className="border-gray-700 mb-8 mr-14 ml-13" />


            <div className="shadow-lg max-w ml-13 mr-14">
                <IncidentReportsToolbar />
                <IncidentReportsTable />
                <TablePaginator currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)} />
            </div>

        </DashboardLayout>
    );
}

export default ViewIncidentReports;