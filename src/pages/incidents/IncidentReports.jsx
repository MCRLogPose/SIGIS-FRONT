import React from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/layouts/DashboardLayout';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable';
import IncidentModal from '@/components/cammon/modals/IncidentModal';

import { usePagination } from '@/hooks/pagination/usePagination';
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal';
import { useFinalizedIncidents } from '@/hooks/incidents/useFinalizedIncidents';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Titulo' },
  { key: 'description', label: 'Descripción' },
  { key: 'issueDate', label: 'Fecha de Emisión' },
  {
    key: 'priority',
    label: 'Prioridad',
    render: (value) => (
      <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ALTA'
        ? 'bg-red-100 text-red-800'
        : value === 'MEDIA'
          ? 'bg-yellow-100 text-yellow-800'
          : 'bg-green-100 text-green-800'
        }`}>
        {value}
      </span>
    )
  },
  { key: 'aceptanceDate', label: 'Fecha de Aceptación' },
  {
    key: 'status',
    label: 'Estado',
    render: (value) => (
      <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'PENDIENTE'
        ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
        }`}>
        {value}
      </span>
    )
  },
  { key: 'category', label: 'Categoría' },
  { key: 'usuario', label: 'Usuario' },
  { key: 'location', label: 'Ubicación' },
];

const ViewIncidentReports = () => {
  const navigate = useNavigate();
  const { incidents, loading } = useFinalizedIncidents();

  const {
    isModalOpen,
    formData,
    handleChange,
    handleSubmit,
    openModal,
    closeModal
  } = useIncidentModal();

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { currentPage, totalPages, paginatedData, setCurrentPage } =
    usePagination(incidents, rowsPerPage);

  const handleRowDoubleClick = (incident) => {
    navigate(`/home/incident-detail/${incident.id}?type=incidence`);
  };

  return (
    <DashboardLayout>
      <div className="max-w-1lg mx-auto p-4">
        <h1 className="text-2xl font-bold">REPORTES DE INCIDENCIAS</h1>
        <p className="text-sm text-gray-500 mb-6">
          Casos o incidencias cuyo estado ya es culminado
        </p>

        {loading ? (
          <p className="text-center">Cargando incidencias...</p>
        ) : (
          <div className="shadow-lg max-w">
            <TableToolbar onNewClick={openModal} />
            <GenericTable
              columns={columns}
              data={paginatedData}
              onRowDoubleClick={handleRowDoubleClick}
            />
            <TablePaginator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={setRowsPerPage}
            />
          </div>
        )}

        <IncidentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </DashboardLayout>
  );
};

export default ViewIncidentReports;
