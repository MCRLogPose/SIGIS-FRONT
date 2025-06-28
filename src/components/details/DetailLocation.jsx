// src/components/details/DetailLocation.jsx

const DetailLocation = ({ location, floor, building, reference }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-2 text-center">Ubicación</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div><strong>UBICACIÓN:</strong> {location}</div>
                {floor && <div><strong>PISO:</strong> {floor}</div>}
                {building && <div><strong>TORRE:</strong> {building}</div>}
                {reference && (
                    <div className="md:col-span-3 col-span-1">
                        <strong>REFERENCIA:</strong> {reference}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailLocation