// src/pages/dashboard/DashboardHome.jsx

import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardCard from '@/components/incidents/cards/DashboardCard';
import { Pickaxe, Clock, FolderOpen, Megaphone, UserCog, BookOpenCheck, Replace, UserPen, Archive } from 'lucide-react';
import ImageDashboardOptions from '@/assets/bg-dashboard/bg-dashboard-options.png';

const DashBoardHome = () => {
    const cards = [
        {
            title: 'Nueva Incidencia',
            to: '/home/create-incident',
            icon: Pickaxe,
            buttonText: 'Crear'
        },
        {
            title: 'Ver Historial',
            to: '/home/record',
            icon: Clock,
            buttonText: 'Ir'
        },
        {
            title: 'Mis Casos',
            to: '/home/my-cases',
            icon: FolderOpen,
            buttonText: 'Ir'
        },
        {
            title: 'Novedades',
            to: '/home/news',
            icon: Megaphone,
            buttonText: 'Ir'
        },
        {
            title: 'Asignar Casos',
            to: '/home/assing-cases',
            icon: BookOpenCheck,
            buttonText: 'Ir'
        },
        {
            title: 'Seguimientos',
            to: '/home/tracing',
            icon: Replace,
            buttonText: 'Ir'
        },
        {
            title: 'Reportes de Incidencias',
            to: '/home/view-incident-reports',
            icon: Archive,
            buttonText: 'Ir'
        }
    ];

    const cardsConfig = [
        {
            title: 'Gestionar Usuarios',
            to: '/accounts/manage-users',
            icon: UserCog,
            buttonText: 'Ir'
        },
        {
            title: 'Editar Perfil',
            to: '/home/edit-profile',
            icon: UserPen,
            buttonText: 'Ir'
        }
    ]

    return (
        <DashboardLayout>
            <div className="mx-auto p-4">
                <h1 className="text-2xl font-bold">ACTIVIDADES</h1>
                <p className="text-sm text-gray-500 mb-6">Resumen de las actividades principales</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card, idx) => (
                        <DashboardCard
                            key={idx}
                            title={card.title}
                            to={card.to}
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
                <p className="text-sm text-gray-500 mb-6">Configuraciones y gestiòn de cuentas</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cardsConfig.map((card, idx) => (
                        <DashboardCard
                            key={idx}
                            title={card.title}
                            to={card.to}
                            icon={card.icon}
                            buttonText={card.buttonText}
                            image={ImageDashboardOptions}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashBoardHome;