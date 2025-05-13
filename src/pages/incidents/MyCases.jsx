import React, { useState, useEffect } from 'react'
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png'
import IncidentListCards from '@/components/IncidentListCards'

const imageUrl = [ImageDashboardOptions]

const MyCases = () => {
    return (
        <IncidentListCards
            title="MIS CASOS"
            description="Historial de casos realizados en vigencia y sin resolver."
            type="activo"
            imageUrl={imageUrl}
        />  
    );
}

export default MyCases