// src/components/incidents/cards/IncidentCard.jsx

import { Calendar, User, Building, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const IncidentCard = ({ title, description, date, reporter, pavilion, floor, imageUrl, toSeeMore }) => {
  return (
    <div className="flex bg-white shadow-md rounded-xl overflow-hidden">
      <img src={imageUrl} alt="evidencia" className="w-50 h-auto object-cover" />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="font-bold text-md">{title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1"><Calendar size={14} /> {date}</div>
            <div className="flex items-center gap-1"><User size={14} /> {reporter}</div>
          </div>

          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
            <div className="flex items-center gap-1"><Building size={14} /> {pavilion}</div>
            <div className="flex items-center gap-1"><Building size={14} /> Piso {floor}</div>
          </div>
        </div>

        <div className="text-right mt-4">
          <Link to={toSeeMore} className="mt-2 w-full text-black text-sm py-1 rounded cursor-pointer flex items-center justify-center">
            <ArrowRight size={14} /> Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IncidentCard
