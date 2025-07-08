// src/pages/incidents/AssignCases.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/layouts/DashboardLayout';
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png';
import TablePaginator from '@/components/cammon/tables/TablePaginator';
import GenericTable from '@/components/cammon/tables/GenericTable';
import TableToolbar from '@/components/cammon/tables/TableToolbar';
import GenericIncidentCard from '@/components/incidents/cards/GenericIncidentCard';
import ShowMoreButton from '@/components/cammon/buttons/ShowMoreButton';
import IncidentModal from '@/components/cammon/modals/IncidentModal';
import AssignOperatorsModal from '@/components/cammon/modals/AssignOperatorsModal';

import { usePagination } from '@/hooks/pagination/usePagination';
import { useToggleListExpand } from '@/hooks/ui/useToggleListExpand';
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal';
import { getAllIncidentsByState, getOperators } from '@/api/service/incidentService';

const AssignCases = () => {
  const navigate = useNavigate();

  const {
    isModalOpen,
    formData,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  } = useIncidentModal();

  const [genericIncidents, setGenericIncidents] = useState([]);
  const [tableIncidents, setTableIncidents] = useState([]);

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [operators, setOperators] = useState([]);
  const [selectedOperators, setSelectedOperators] = useState([]);

  const openAssignModal = async () => {
    setIsAssignModalOpen(true);
    if (operators.length === 0) {
      try {
        const response = await getOperators();
        setOperators(response);
      } catch (error) {
        console.error('Error cargando operadores:', error);
      }
    }
  };

  const closeAssignModal = () => {
    setIsAssignModalOpen(false);
    setSelectedOperators([]);
  };

  const toggleOperatorSelect = (operator) => {
    setSelectedOperators((prev) => {
      const exists = prev.some((op) => op.id === operator.id);
      return exists ? prev.filter((op) => op.id !== operator.id) : [...prev, operator];
    });
  };

  const confirmAssignOperators = () => {
    console.log('Asignar operadores:', selectedOperators);
    closeAssignModal();
  };

  const {
    isExpanded: isGenericExpanded,
    visibleItems: visibleGenericItems,
    toggleExpand: toggleGenericExpand,
  } = useToggleListExpand(genericIncidents, 2);

  const visibleGeneric = isGenericExpanded
    ? visibleGenericItems
    : visibleGenericItems.slice(0, 2);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Titulo' },
    { key: 'description', label: 'Descripción' },
    { key: 'issueDate', label: 'Fecha de Emisión' },
    {
      key: 'priority', label: 'Prioridad', render: (value) => (
        <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ALTA' ? 'bg-red-100 text-red-800' : value === 'MEDIA' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
          {value}
        </span>
      )
    },
    { key: 'aceptanceDate', label: 'Fecha de Aceptación' },
    { key: 'completionDate', label: 'Fecha de Finalizaciòn' },
    {
      key: 'status', label: 'Estado', render: (value) => (
        <span className={`text-xs font-medium px-2 py-1 rounded ${value === 'ACTIVA' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {value}
        </span>
      )
    },
    { key: 'category', label: 'Categoría', render: (value) => value?.typeCategory || 'Sin categoría' },
    { key: 'operators', label: 'Operarios'},
  ];

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(
    tableIncidents,
    rowsPerPage
  );

  const handleRowDoubleClick = (incident) => {
    navigate(`/home/incident-detail/${incident.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pending = await getAllIncidentsByState('Pendiente');
        const priority = pending.filter((i) => i.priority === 'Alta');

        setGenericIncidents(priority);
        setTableIncidents(pending);
      } catch (error) {
        console.error('Error al cargar incidencias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold">INCIDENCIAS CON MAYOR PRIORIDAD - POR ASIGNAR</h2>
          <p className="text-sm text-gray-500 mb-4">
            Incidencias por asignar a operarios de alta prioridad
          </p>
          <div className="space-y-4">
            {visibleGeneric.map((incident) => (
              <GenericIncidentCard
                key={incident.id}
                incident={incident}
                imageUrl={incident.imageUrl || ImageDashboardOptions}
                buttonTitle1="DELEGAR"
                buttonTitle2="RECHAZAR"
                toSeeMore={`/home/incident-detail/${incident.id}`}
                onButton1Click={openAssignModal}
              />
            ))}
            <ShowMoreButton
              onClick={toggleGenericExpand}
              isExpanded={isGenericExpanded}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">INCIDENCIAS GENERALES - POR DELEGAR</h2>
          <p className="text-sm text-gray-500 mb-4">
            Incidencias por asignar, vista general
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

        <AssignOperatorsModal
          isOpen={isAssignModalOpen}
          onClose={closeAssignModal}
          operators={operators}
          selectedOperators={selectedOperators}
          onToggleOperator={toggleOperatorSelect}
          onConfirm={confirmAssignOperators}
        />
      </div>
    </DashboardLayout>
  );
};

export default AssignCases;
