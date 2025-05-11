import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { Pickaxe, Clock, FolderOpen, Megaphone, UserCog, BookOpenCheck, Replace, UserPen } from 'lucide-react';
import bg_DashboardOptions from '@/assets/bg_dashboard/bg-dashboard-options.png';

const DashBoardHome = () => {
    const cards = [
        {
            title: 'Nueva Incidencia',
            to: '/home/nueva-incidencia',
            icon: Pickaxe,
            buttonText: 'Crear Nueva Incidencia'
        },
        {
            title: 'Ver Historial',
            to: '/home/historial',
            icon: Clock,
            buttonText: 'Ir'
        },
        {
            title: 'Mis Casos',
            to: '/home/mis-casos',
            icon: FolderOpen,
            buttonText: 'Ir'
        },
        {
            title: 'Novedades',
            to: '/home/novedades',
            icon: Megaphone,
            buttonText: 'Ir'
        },
        {
            title: 'Asignar Casos',
            to: '/home/asignar-casos',
            icon: BookOpenCheck,
            buttonText: 'Ir'
        },
        {
            title: 'Seguimientos',
            to: '/home/seguimientos',
            icon: Replace,
            buttonText: 'Ir'
        }
    ];

    const cardsConfig = [
        {
            title: 'Gestionar Usuarios',
            to: '/home/gestionar-usuarios',
            icon: UserCog,
            buttonText: 'Ir'
        },
        {
            title: 'Editar Perfil',
            to: '/home/editar-perfil',
            icon: UserPen,
            buttonText: 'Ir'
        }
    ]

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold">ACTIVIDADES</h1>
            <p className="text-m font-bold mb-2 text-gray-700">Resumen de las actividades principales</p>
            <hr className="p-2 border-gray-700 mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, idx) => (
                    <DashboardCard
                        key={idx}
                        title={card.title}
                        to={card.to}
                        icon={card.icon}
                        buttonText={card.buttonText}
                        image={bg_DashboardOptions}
                    />
                ))}
            </div>

            <br className="my-8" />
            <h1 className="text-3xl font-bold">ACTIVIDADES</h1>
            <p className="text-m font-bold mb-2 text-gray-700">Resumen de las actividades principales</p>
            <hr className="p-2 border-gray-700 mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardsConfig.map((card, idx) => (
                    <DashboardCard
                        key={idx}
                        title={card.title}
                        to={card.to}
                        icon={card.icon}
                        buttonText={card.buttonText}
                        image={bg_DashboardOptions}
                    />
                ))}
            </div>

        </DashboardLayout>
    );
};

export default DashBoardHome;