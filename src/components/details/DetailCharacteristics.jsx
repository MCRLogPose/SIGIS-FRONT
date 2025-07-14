//src/components/details/DetailCharacteristics.jsx

const DetailCharacteristics = ({ incident }) => {
    if (!incident) {
        return <p className="text-red-500">No se pudo cargar la información de la incidencia.</p>
    }

    const {
        id,
        user,
        emissionDate,
        acceptanceDate,
        administrator,
        phone,
        category,
        updates
    } = incident

    return (
        <div className="p-4 space-y-2 text-sm">
            <h2 className="text-lg font-semibold mb-2">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>ID: {id?.toString().padStart(5, '0')}</div>
                {user && <div>REPORTADOR: {user?.nombre} {user?.apellidos}</div>}
                {administrator && <div>ADMINISTRADOR: {administrator}</div>}
                {emissionDate && <div>EMISIÓN: {new Date(emissionDate).toLocaleDateString()}</div>}
                {acceptanceDate && <div>ACEPTACIÓN: {acceptanceDate}</div>}
                {updates && <div>ACTUALIZACIÓN: {new Date(updates?.date).toLocaleDateString()}</div>}
                {phone && <div>TELÉFONO REPORTADOR: {phone}</div>}
                {category &&<div>CATEGORÍA: {category || 'Sin categoría'}</div>}
                
            </div>
        </div>
    )
}

export default DetailCharacteristics
