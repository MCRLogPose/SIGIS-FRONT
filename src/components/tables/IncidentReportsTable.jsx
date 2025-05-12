import React from 'react'

const staticData = [
  {
    id: '00001',
    title: 'Lorem Ipsum Dolor',
    description: 'Lorem Ipsum Dolor Sit Amet',
    location: 'A0302',
    issueDate: '31/12/2022',
    acceptanceDate: '31/12/2022',
    status: 'CULMINADO',
    category: 'SEGURIDAD',
    operator: 'Miguel12',
  },
  // Puedes agregar más objetos simulados aquí...
]

const IncidentReportsTable = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Título</th>
            <th className="px-4 py-3">Descripción</th>
            <th className="px-4 py-3">Ubicación</th>
            <th className="px-4 py-3">Emisión</th>
            <th className="px-4 py-3">Aceptación</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Categoría</th>
            <th className="px-4 py-3">Operarios</th>
          </tr>
        </thead>
        <tbody>
          {staticData.map((report, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{report.id}</td>
              <td className="px-4 py-2">{report.title}</td>
              <td className="px-4 py-2">{report.description}</td>
              <td className="px-4 py-2">{report.location}</td>
              <td className="px-4 py-2">{report.issueDate}</td>
              <td className="px-4 py-2">{report.acceptanceDate}</td>
              <td className="px-4 py-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  {report.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                  {report.category}
                </span>
              </td>
              <td className="px-4 py-2">{report.operator}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IncidentReportsTable
