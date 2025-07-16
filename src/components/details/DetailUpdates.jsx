// File: src/components/details/DetailUpdates.jsx

import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand'
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton'

const DetailUpdates = ({ updates }) => {
    if (!updates || updates.length === 0) return null

    const {
        isExpanded,
        visibleItems,
        toggleExpand
    } = useToggleListExpand(updates, 2)

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Historial de actualizaciones</h2>
            <ul className="space-y-4 text-sm">
                {visibleItems.map((update, index) => (
                    <li key={index} className="bg-gray-600 p-3 rounded-md">
                        <div className="flex justify-between text-xs text-gray-100 mb-1">
                            <span><strong>{update.user}</strong></span>
                            <span>{new Date(update.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-white">{update.comment}</p>
                    </li>
                ))}
            </ul>
            {updates.length > 2 && (
                <div className="mt-4">
                    <ShowMoreButton onClick={toggleExpand} isExpanded={isExpanded} />
                </div>
            )}
        </div>
    )
}

export default DetailUpdates
