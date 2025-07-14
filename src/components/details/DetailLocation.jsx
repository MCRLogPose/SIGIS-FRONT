// src/components/details/DetailLocation.jsx

import { Building, Building2, LocationEdit } from "lucide-react"

const DetailLocation = ({ location }) => {
    const {
        pavilion,
        floor,
        reference
    } = location
    return (
        <div>
            <h2 className="text-lg font-semibold mb-2 text-center">Ubicación</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {pavilion &&(
                    <div className="flex items-center gap-3"><Building /> Torre: {pavilion}</div>
                )}
                
                {floor && (
                    <div className="flex items-center gap-3"><Building2 /> Piso: {floor}</div>
                )}
                
                {reference && (
                    <div className="flex items-center gap-3 md:col-span-3 col-span-1"> <LocationEdit /> Ref: {reference} </div>
                )}
                
            </div>
        </div>
    )
}

export default DetailLocation