// src/components/incidents/cards/GenericIncidentCard.jsx

import { ArrowRight, BadgeCheck, BadgeX, Calendar, ContactRound, MapPin, PersonStanding } from 'lucide-react'
import { Link } from 'react-router-dom'
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';

const GenericIncidentCard = ({ incident, buttonTitle1, buttonTitle2, toSeeMore }) => {
  const { title, description, dateEmision, priority, state, image } = incident
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'http://localhost:8080/images/'
  const fullImageUrl =  image ?`${IMAGE_BASE_URL}${image}`: null;
  const displayImage = fullImageUrl || DefaultImage;
  return (
    <div className="bg-white shadow-sm flex overflow-hidden">
      <img src={displayImage} alt="Incidente" className="w-50 h-50 object-cover rounded-l-2xl" />
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <div className='flex items-center gap-1'><Calendar />{new Date(dateEmision).toLocaleDateString()} </div>
          <div className='flex items-center gap-1'><MapPin />{priority} </div>
        </div>
        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <div className='flex items-center gap-1'><ContactRound />{state} </div>
          <div className='flex items-center gap-1'><PersonStanding />{incident.category} </div>
        </div>


        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <button className='bg-green-700 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 cursor-pointer'>
              <BadgeCheck />{buttonTitle1}
          </button>
          <button className='bg-red-700 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 cursor-pointer'>
               <BadgeX />{buttonTitle2}
          </button>
          <Link to={toSeeMore} className='bg-gray-700 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 cursor-pointer'>
              <ArrowRight />Ver màs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GenericIncidentCard