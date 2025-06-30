// src/pages/incidents/MyCases.jsx

import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import IncidentListCards from '@/components/incidents/IncidentListCards'

const imageUrl = [ImageDashboardOptions]

const MyCases = () => {
    return (
        <IncidentListCards
            title="MIS CASOS"
            description="Historial de casos realizados en vigencia y sin resolver."
            type="Pendiente"
        />  
    );
}

export default MyCases