import React from 'react'

const DetailUpdates = ({ updates }) => {
    if (!updates || updates.length === 0) return null

    return (
        <div className="bg-blue-950 text-white rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4">Historial de actualizaciones</h2>
            <ul className="space-y-4 text-sm">
                {updates.map((update, index) => (
                    <li key={index} className="bg-blue-900 p-3 rounded-md">
                        <div className="flex justify-between text-xs text-gray-100 mb-1">
                            <span><strong>{update.user}</strong></span>
                            <span>{update.date}</span>
                        </div>
                        <p className="text-white">{update.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DetailUpdates