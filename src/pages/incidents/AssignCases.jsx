import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/layouts/DashboardLayout'
import NewIncidentCard from '@/components/cards/NewIncidentCard'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import UpdatedIncidentCard from '@/components/cards/UpdatedIncidentCard'
import IncidentReportsTable from '@/components/tables/IncidentReportsTable';
import IncidentReportsToolbar from '@/components/tables/IncidentReportsToolbar';
import TablePaginator from '@/components/tables/TablePaginator';

const TracingPage = () => {
    const [updateIncidents, setUpdateIncidents] = useState([])

    useEffect(() => {
        setUpdateIncidents([
            {
                id: 2,
                title: 'Caño roto, baño de hombres',
                description: 'Se reparo el caño, sin embargo se dispone de material para culminarlo',
                date: '06 / 01 / 2021',
                administrator: 'Juan Segarra',
                imageUrl: ImageDashboardOptions
            },
            // más casos...
        ])
    }, [])

    return (
        <DashboardLayout>
            <div className="p-6 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold">INCIDENCIAS CON MAYOR PRIORIDAD - POR ASIGNAR</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias por asignar a operarios de alta prioridad</p>
                    <div className="space-y-4">
                        {updateIncidents.map((incident) => (
                            <UpdatedIncidentCard
                                key={incident.id}
                                incident={incident}
                                imageUrl={incident.imageUrl}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">INCIDENCIAS GENERALES - POR DELEGAR</h2>
                    <p className="text-sm text-gray-500 mb-4">Incidencias por asignar, vista general</p>
                    <div>
                        <IncidentReportsToolbar />
                        <IncidentReportsTable />
                        <TablePaginator currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)} />
                    </div>
                </section>
            </div>
        </DashboardLayout>
    )
}

export default TracingPage