import React from 'react'

const DetailCharacteristics = ({ incident }) => {
    if (!incident) {
        return <p className="text-red-500">No se pudo cargar la información de la incidencia.</p>
    }

    const {
        id,
        reporter,
        administrator,
        emissionDate,
        acceptanceDate,
        updateDate,
        endDate,
        phone,
        category
    } = incident

    return (
        <div className="p-4 space-y-2 text-sm text-white bg-blue-950 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>ID: {id?.toString().padStart(5, '0')}</div>
                <div>REPORTADOR: {reporter}</div>
                {administrator && <div>ADMINISTRADOR: {administrator}</div>}
                {emissionDate && <div>EMISIÓN: {emissionDate}</div>}
                {acceptanceDate && <div>ACEPTACIÓN: {acceptanceDate}</div>}
                {updateDate && <div>ACTUALIZACIÓN: {updateDate}</div>}
                {endDate && <div>CULMINADO: {endDate}</div>}
                {phone && <div>TELÉFONO REPORTADOR: {phone}</div>}
                <div>CATEGORÍA: {category}</div>
            </div>
        </div>
    )
}

export default DetailCharacteristics
