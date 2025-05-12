import React from 'react';
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png';
import DashboardLayout from '@/layouts/DashboardLayout';
import IncidentReportsTable from '@/components/tables/IncidentReportsTable';
import IncidentReportsToolbar from '@/components/IncidentReportsToolbar';

const ViewIncidentReports = () => {
    return (
        <DashboardLayout>
            <div className='ml-13 mb-8'>
                <h1 className="text-3xl font-bold">REPORTES DE INCIDENCIAS</h1>
                <p className="text-m font-bold mb-2 text-gray-700">Casos o incidencias cuyo estado ya es culminado</p>
                <hr className="border-gray-700 mb-2 mr-14" />
            </div>

            <div className="shadow-lg max-w ml-13 mr-14">
                <IncidentReportsToolbar />
                <IncidentReportsTable />
            </div>

            <img src={ImageDashboardOptions} alt="Dashboard Options" className="absolute bottom-0 right-0 w-[300px] h-auto" />
        </DashboardLayout>
    );
}

export default ViewIncidentReports;