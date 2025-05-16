
import { ArrowRight, BadgeCheck, BadgeX, Calendar, ContactRound, MapPin, PersonStanding } from 'lucide-react'
import { Link } from 'react-router-dom'

const GenericIncidentCard = ({ incident, buttonTitle1, buttonTitle2, toSeeMore }) => {
  return (
    <div className="bg-white shadow-sm flex overflow-hidden">
      <img src={incident.imageUrl} alt="Incidente" className="w-50 h-50 object-cover rounded-l-2xl" />
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h3 className="text-base font-bold">{incident.title}</h3>
          <p className="text-sm text-gray-600">{incident.description}</p>
        </div>

        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <div className='flex items-center gap-1'><Calendar />{incident.date} </div>
          <div className='flex items-center gap-1'><MapPin />{incident.location} </div>
        </div>
        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <div className='flex items-center gap-1'><ContactRound />{incident.reporter} </div>
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