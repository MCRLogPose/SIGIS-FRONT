// src/pages/dashboard/DashboardHome.jsx

import { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardCard from '@/components/incidents/cards/DashboardCard';
import { Pickaxe, Clock, FolderOpen, Megaphone, UserCog, BookOpenCheck, Replace, UserPen, Archive } from 'lucide-react';
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png';
import IncidentModal from '@/components/cammon/modals/IncidentModal';
import { useIncidentModal } from '@/hooks/incidents/useIncidentModal';
import useIsAdmin from "@/hooks/auth/useIsAdmin";
import useIsOperario from "@/hooks/auth/useIsOperario";

const DashBoardHome = () => {
  const isAdmin = useIsAdmin();
  const isOperario = useIsOperario();

  const {
    isModalOpen,
    formData,
    handleChange,
    handleSubmit,
    openModal,
    closeModal
  } = useIncidentModal();

  const allCards = [
    {
      title: 'Nueva Incidencia',
      onClick: openModal,
      icon: Pickaxe,
      buttonText: 'Crear',
      show: true
    },
    {
      title: 'Ver Historial',
      to: '/home/record',
      icon: Clock,
      buttonText: 'Ir',
      show: true
    },
    {
      title: 'Mis Casos',
      to: '/home/my-cases',
      icon: FolderOpen,
      buttonText: 'Ir',
      show: true
    },
    {
      title: 'Novedades',
      to: '/home/news',
      icon: Megaphone,
      buttonText: 'Ir',
      show: isOperario // Solo para operarios
    },
    {
      title: 'Asignar Casos',
      to: '/home/assing-cases',
      icon: BookOpenCheck,
      buttonText: 'Ir',
      show: isAdmin // Solo para admin
    },
    {
      title: 'Seguimientos',
      to: '/home/tracing',
      icon: Replace,
      buttonText: 'Ir',
      show: isAdmin // Solo para admin
    },
    {
      title: 'Reportes de Incidencias',
      to: '/home/incident-reports',
      icon: Archive,
      buttonText: 'Ir',
      show: isAdmin // Solo para admin
    }
  ];

  const allConfigCards = [
    {
      title: 'Gestionar Usuarios',
      to: '/accounts/manage-users',
      icon: UserCog,
      buttonText: 'Ir',
      show: isAdmin // Solo para admin
    },
    {
      title: 'Editar Perfil',
      to: '/home/edit-profile',
      icon: UserPen,
      buttonText: 'Ir',
      show: true
    }
  ];

  // Filtrar tarjetas visibles
  const visibleCards = allCards.filter(card => card.show);
  const visibleConfigCards = allConfigCards.filter(card => card.show);

  return (
    <DashboardLayout>
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold">ACTIVIDADES</h1>
        <p className="text-sm text-gray-500 mb-6">Resumen de las actividades principales</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCards.map((card, idx) => (
            <DashboardCard
              key={idx}
              title={card.title}
              to={card.to}
              onClick={card.onClick}
              icon={card.icon}
              buttonText={card.buttonText}
              image={ImageDashboardOptions}
            />
          ))}
        </div>
      </div>

      <br className="my-8" />

      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold">AJUSTES</h1>
        <p className="text-sm text-gray-500 mb-6">Configuraciones y gestión de cuentas</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleConfigCards.map((card, idx) => (
            <DashboardCard
              key={idx}
              title={card.title}
              to={card.to}
              onClick={card.onClick}
              icon={card.icon}
              buttonText={card.buttonText}
              image={ImageDashboardOptions}
            />
          ))}
        </div>
      </div>

      <IncidentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </DashboardLayout>
  );
};

export default DashBoardHome;
