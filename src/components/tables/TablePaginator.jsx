import React from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

const TablePaginator = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  return (
    <div className="flex items-center justify-between mt-4 text-sm text-white bg-gray-600 p-4 rounded-xl">
      <div>
        Rows per page:
        <select
          className="ml-2 border rounded px-2 py-1 cursor-pointer"
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span>{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className="p-1 disabled:opacity-50 cursor-pointer"
        >
          <ChevronsLeft size={18} />
        </button>

        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className="p-1 disabled:opacity-50 cursor-pointer"
        >
          <ChevronsRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default TablePaginator