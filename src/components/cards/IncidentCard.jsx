import React from 'react'
import { Calendar, User, Building, ArrowRight } from 'lucide-react'

const IncidentCard = ({ title, description, date, reporter, pavilion, floor, imageUrl }) => {
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
          <button className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 cursor-pointer">
            <ArrowRight size={14} /> Ver más
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncidentCard
