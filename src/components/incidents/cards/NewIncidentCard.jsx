// src/components/incidents/cards/NewIncidentCard.jsx

import { ArrowRight, BadgeCheck, Calendar } from "lucide-react"
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';
import GenericButton from '@/components/cammon/buttons/GenericButton';
import { showConfirmationAlert } from '@/utils/alerts'

const NewIncidentCard = ({ incident, toSeeMore, onAccept }) => {
  const { title, description, dateEmision, image, priority, location } = incident
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'http://localhost:8080/images/'
  const fullImageUrl = image ? `${IMAGE_BASE_URL}${image}` : null;
  const displayImage = fullImageUrl || DefaultImage;
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="w-full h-40 overflow-hidden">
        <img src={displayImage} alt="Incidente" className="w-full h-full object-contain rounded mb-3" />
      </div>
      <div className="p-4 space-y-2">
        <h3
          className="text-sm font-bold overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ maxWidth: '100%', maxHeight: 24, minHeight: 24, display: 'block' }}
          title={title}
        >
          {title}
        </h3>
        <p
          className="text-sm text-gray-600 line-clamp-2 overflow-hidden text-ellipsis"
          style={{ maxHeight: 40, minHeight: 40, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
          title={description}
        >
          {description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{new Date(dateEmision).toLocaleDateString()}</span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {location.pavilion || 'Sin prioridad'} - {location.floor ?? 'N/A'}
          </span>
        </div>

        <GenericButton
          to={toSeeMore}
          icon={ArrowRight}
          className="mt-2 w-full text-black text-sm py-1 rounded"
          variant="default"
        >
          VER MÀS
        </GenericButton>
        <GenericButton
          icon={BadgeCheck}
          className="mt-2 w-full text-sm py-1 rounded"
          variant="secondary"
          onClick={async () => {
            const confirmed = await showConfirmationAlert('¿Estás seguro de continuar?');
            if (onAccept && confirmed.isConfirmed) {
              onAccept();
            }
          }}
        >
          ACEPTAR
        </GenericButton>
      </div>
    </div>
  )
}

export default NewIncidentCard
