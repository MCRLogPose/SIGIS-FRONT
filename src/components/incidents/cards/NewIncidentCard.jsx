// src/components/incidents/cards/NewIncidentCard.jsx

import { ArrowRight, BadgeCheck, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';
import GenericButton from '@/components/cammon/buttons/GenericButton';

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
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
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
          onClick={() => {
            if (onAccept) {
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
