import React from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/layouts/DashboardLayout';
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png';
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import GenericIncidentCard from '@/components/incidents/cards/GenericIncidentCard';
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton';
import IncidentModal from '@/components/cammon/modals/IncidentModal';
import AssignmentResponseModal from '@/components/cammon/modals/AssignmentResponseModal';

import { usePagination } from '@/hooks/pagination/usePagination';
import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand';
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal';
import { useAssignmentActions } from '@/hooks/incidents/useAssignmentActions';
import { useAuth } from '@/context/AuthContext';
import { useIncidentsWithAssignments } from '@/hooks/incidents/useIncidentsWithAssignment';

const TracingPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const currentUserId = user?.id;

  const {
    isModalOpen,
    formData,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  } = useIncidentModal();

  const { incidents, refreshIncidents } = useIncidentsWithAssignments("en proceso");

  const genericIncidents = incidents.filter(i => i.priority === 'ALTA');

  const {
    isExpanded: isGenericExpanded,
    visibleItems: visibleGenericItems,
    toggleExpand: toggleGenericExpand,
  } = useToggleListExpand(genericIncidents, 2);

  const {
    handleAccept,
    openRejectModal,
    closeRejectModal,
    isResponseModalOpen,
    responseText,
    setResponseText,
    handleRejectSubmit,
  } = useAssignmentActions(currentUserId, refreshIncidents);

  const visibleGeneric = isGenericExpanded
    ? visibleGenericItems
    : visibleGenericItems.slice(0, 2);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(
    incidents,
    rowsPerPage
  );

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Título' },
    { key: 'description', label: 'Descripción' },
    { key: 'issueDate', label: 'Fecha de Emisión' },
    {
      key: 'priority',
      label: 'Prioridad',
      render: (value) => (
        <span className={`text-xs font-medium px-2 py-1 rounded ${
          value === 'ALTA' ? 'bg-red-100 text-red-800' :
          value === 'MEDIA' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'}`}>
          {value}
        </span>
      ),
    },
    { key: 'aceptanceDate', label: 'Fecha de Aceptación' },
    {
      key: 'status',
      label: 'Estado',
      render: (value) => (
        <span className={`text-xs font-medium px-2 py-1 rounded ${
          value === 'PENDIENTE' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'}`}>
          {value}
        </span>
      ),
    },
    { key: 'category', label: 'Categoría' },
    { key: 'usuario', label: 'Usuario' },
    { key: 'location', label: 'Ubicación' },
  ];

  const handleRowDoubleClick = (incident) => {
    navigate(`/home/incident-detail/${incident.id}?type=incidence`);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold">INCIDENCIAS CON MAYOR PRIORIDAD - POR CULMINAR</h2>
          <p className="text-sm text-gray-500 mb-4">
            Incidencias por asignar a operarios de alta prioridad
          </p>
          <div className="space-y-4">
            {visibleGeneric.map((incident) => (
              <GenericIncidentCard
                key={incident.id}
                incident={incident}
                imageUrl={incident.imageUrl || ImageDashboardOptions}
                buttonTitle1="ACEPTAR"
                buttonTitle2="RECHAZAR"
                toSeeMore={`/home/incident-detail/${incident.id}?type=incidence`}
                onButton1Click={() => handleAccept(incident.assignmentId)}
                onButton2Click={() => openRejectModal(incident.assignmentId)}
              />
            ))}
            <ShowMoreButton onClick={toggleGenericExpand} isExpanded={isGenericExpanded} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">INCIDENCIAS GENERALES - POR CULMINAR</h2>
          <p className="text-sm text-gray-500 mb-4">
            Incidencias completadas - Solicitudes de aceptación
          </p>
          <div>
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
        </section>

        <IncidentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <AssignmentResponseModal
          isOpen={isResponseModalOpen}
          onClose={closeRejectModal}
          responseText={responseText}
          setResponseText={setResponseText}
          onSubmit={handleRejectSubmit}
        />
      </div>
    </DashboardLayout>
  );
};

export default TracingPage;
