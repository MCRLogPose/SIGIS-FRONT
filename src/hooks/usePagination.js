import { useState, useMemo, useEffect } from 'react'

export const usePagination = (data = [], rowsPerPage = 3) => {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [rowsPerPage])

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / rowsPerPage)
  }, [data, rowsPerPage])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    return data.slice(startIndex, endIndex)
  }, [currentPage, rowsPerPage, data])

  return {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage,
  }
}