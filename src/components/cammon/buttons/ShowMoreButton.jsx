// src/components/cammon/buttons/ShowMoreButton.jsx
import { ArrowBigDownDash } from 'lucide-react'

const ShowMoreButton = ({ onClick, isExpanded }) => {
  return (
    <div className="mt-4 flex justify-center bg-gray-100 p-4 rounded-lg bg-transparent">
      <button
        onClick={onClick}
        className="text-blue-600 hover:underline text-sm flex items-center justify-center gap-2 w-full cursor-pointer"
      >
        <ArrowBigDownDash />{isExpanded ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  )
}

export default ShowMoreButton
