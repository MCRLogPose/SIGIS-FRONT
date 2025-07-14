// src/components/incidents/cards/GenericIncidentCard.jsx

import { Calendar, ContactRound, MapPin, PersonStanding, BadgeCheck, BadgeX, ArrowRight, TriangleAlert, WaypointsIcon, User } from "lucide-react";
import DefaultImage from '@/assets/bg-dashboard/bg-dashboard-options.png';
import GenericButton from '@/components/cammon/buttons/GenericButton';

const GenericIncidentCard = ({
  incident,
  buttonTitle1,
  buttonTitle2,
  toSeeMore,
  onButton1Click,
  onButton2Click
}) => {
  const {
    title,
    description,
    issueDate,
    priority,
    status,
    image,
    category,
    location,
    usuario,
  } = incident;

  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'http://localhost:8080/images/';
  const fullImageUrl = image ? `${IMAGE_BASE_URL}${image}` : null;
  const displayImage = fullImageUrl || DefaultImage;

  return (
    <div className="bg-white shadow-sm flex overflow-hidden rounded-2xl">
      <img src={displayImage} alt="Incidente" className="w-50 h-50 object-cover rounded-l-2xl" />

      <div className="flex flex-col justify-between p-4 flex-1">
        {/* Título y descripción */}
        <div>
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Fecha y prioridad */}
        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <div className='flex items-center gap-1'>
            <Calendar />
            {issueDate || 'Sin fecha'}
          </div>
          <div className='flex items-center gap-1'>
            <TriangleAlert />
            {priority || 'Sin prioridad'}
          </div>
          <div className='flex items-center gap-1'>
            <MapPin />
            {location}
          </div>
        </div>

        {/* Estado y categoría */}
        <div className='flex items-center gap-4 mt-2 text-sm text-gray-500'>
          <div className='flex items-center gap-1'>
            <WaypointsIcon />
            {status || 'Sin estado'}
          </div>
          <div className='flex items-center gap-1'>
            <PersonStanding />
            {category || 'Sin categoría'}
          </div>
          <div className='flex items-center gap-1'>
            <User />
            {usuario || 'Unknown User'}
          </div>
        </div>

        {/* Botones */}
        <div className='flex items-center gap-4 mt-4 text-sm text-gray-500'>
          {(buttonTitle1) && (
            <GenericButton
              icon={BadgeCheck}
              variant="secondary"
              onClick={onButton1Click}>
              {buttonTitle1}
            </GenericButton>
          )}

          {(buttonTitle2) && (
            <GenericButton icon={BadgeX} variant="destructive" onClick={onButton2Click}>
              {buttonTitle2}
            </GenericButton>
          )}
          <GenericButton icon={ArrowRight} to={toSeeMore}>
            Ver más
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export default GenericIncidentCard;