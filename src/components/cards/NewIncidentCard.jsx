import { ArrowRight, BadgeCheck } from "lucide-react"
import { Link } from "react-router-dom"

const NewIncidentCard = ({ incident, imageUrl, toSeeMore }) => {
    return (
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="w-full h-40 overflow-hidden">
          <img src={imageUrl} alt="Incidente" className="w-full h-full object-contain rounded mb-3" />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-sm font-bold">{incident.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{incident.description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{incident.date}</span>
            <span className="flex items-center gap-1">
              📍 {incident.location}
            </span>
          </div>
          <Link to={toSeeMore} className="mt-2 w-full text-black text-sm py-1 rounded cursor-pointer flex items-center justify-center gap-2">
            <ArrowRight /> VER MÀS
          </Link>
          <button className="mt-2 w-full bg-gray-700 text-white text-sm py-1 rounded hover:bg-gray-800 cursor-pointer flex items-center justify-center gap-2">
            <BadgeCheck /> ACEPTAR
          </button>
        </div>
      </div>
    )
  }
  
  export default NewIncidentCard
  