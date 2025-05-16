import { Link } from 'react-router-dom'
import { Download, Search, FilePlus, ChartNoAxesGantt, Table } from 'lucide-react'

const TableToolbar = ({ toCreate }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-4">
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="text"
          placeholder="Buscar..."
          className="border rounded px-2 py-1 text-sm flex-grow"
        />
        <button className="hover:bg-gray-100 rounded px-3 py-1.5 cursor-pointer">
          <Search className="text-gray-500" size={18} />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <Link to={toCreate} className="flex items-center bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-500 text-sm cursor-pointer">
          <FilePlus size={16} className="mr-1" /> Nuevo
        </Link>
        <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          <Download size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          <ChartNoAxesGantt size={18} />
        </button>
      </div>

    </div>
  )
}

export default TableToolbar
