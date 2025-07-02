// src/pages/incidents/ActiveIncidents.jsx

import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import IncidentListCards from '@/components/incidents/IncidentListCards'

const imageUrl = [ImageDashboardOptions]

const ActiveIncidents = () => {
    return (
        <IncidentListCards
            title="MI HISTORIAL"
            description="Historial de casos realizados culminados."
            type="Completado"
        />  
    );
}

export default ActiveIncidents
