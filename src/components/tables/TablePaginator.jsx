import React from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

const TablePaginator = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
      <div>
        Rows per page:
        <select className="ml-2 border rounded px-2 py-1">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => onPageChange(1)} className="p-1">
          <ChevronsLeft size={18} />
        </button>
        <button onClick={() => onPageChange(currentPage - 1)} className="p-1">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => onPageChange(currentPage + 1)} className="p-1">
          <ChevronRight size={18} />
        </button>
        <button onClick={() => onPageChange(totalPages)} className="p-1">
          <ChevronsRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default TablePaginator
