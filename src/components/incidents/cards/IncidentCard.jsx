// File: src/components/incidents/cards/IncidentCard.jsx

import { Calendar, BadgeAlert, AlertTriangle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';

const IncidentCard = ({ incident, toSeeMore }) => {
  const { title, description, dateEmision, priority, state, image } = incident
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'http://localhost:8080/images/'
  const fullImageUrl =  image ?`${IMAGE_BASE_URL}${image}`: null;
  const displayImage = fullImageUrl || DefaultImage;
  return (
    <div className="flex bg-white shadow-md rounded-xl overflow-hidden">
      <img src={displayImage} alt="evidencia" onError={(e) => e.currentTarget.src = DefaultImage} className="w-50 h-auto object-cover"/>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="font-bold text-md">{title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {new Date(dateEmision).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <BadgeAlert size={14} /> Prioridad: {priority}
            </div>
            <div className="flex items-center gap-1">
              <AlertTriangle size={14} /> Estado: {state}
            </div>
          </div>
        </div>

        <div className="text-right mt-4">
          <Link
            to={toSeeMore}
            className="mt-2 w-full text-black text-sm py-1 rounded cursor-pointer flex items-center justify-center"
          >
            <ArrowRight size={14} /> Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IncidentCard