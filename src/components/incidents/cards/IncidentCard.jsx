// File: src/components/incidents/cards/IncidentCard.jsx

import { Calendar, BadgeAlert, AlertTriangle, ArrowRight, Badge, MapPin, TriangleAlert, WaypointsIcon, PersonStanding } from 'lucide-react'
import { Link } from 'react-router-dom'
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';
import GenericButton from '@/components/cammon/buttons/GenericButton';

const IncidentCard = ({ incident, toSeeMore }) => {
  const { title, description, dateEmision, priority, state, image, category, location } = incident
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'http://localhost:8080/images/'
  const fullImageUrl = image ? `${IMAGE_BASE_URL}${image}` : null;
  const displayImage = fullImageUrl || DefaultImage;
  return (
    <div className="flex bg-white shadow-md rounded-xl overflow-hidden">
      <img src={displayImage} alt="evidencia" onError={(e) => e.currentTarget.src = DefaultImage} className="w-50 h-auto object-cover" />
      <div className="p-4 flex flex-col justify-between flex-1 ml-[30px]">
        <div>
          <h2 className="font-bold text-md">{title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {new Date(dateEmision).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <TriangleAlert size={14} /> {priority}
            </div>
            <div className="flex items-center gap-1">
              <WaypointsIcon size={14} />{state}
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <PersonStanding size={14} /> {category?.typeCategory || 'Sin categoría'}
            </div>
            <div className="flex items-center gap-1">
              <MapPin /> {location?.pavilion || 'Sin prioridad'} - {location?.floor ?? 'N/A'}
            </div>
          </div>

        </div>

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <GenericButton
            to={toSeeMore}
            icon={ArrowRight}
            className="px-2 py-1"
          >
            ir
          </GenericButton>
        </div>
      </div>
    </div>
  )
}

export default IncidentCard