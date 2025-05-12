import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
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
            to: '/home/manage-users',
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
            <div className='ml-13 mb-8'>
                <h1 className="text-3xl font-bold">ACTIVIDADES</h1>
                <p className="text-m font-bold mb-2 text-gray-700">Resumen de las actividades principales</p>
                <hr className="p-2 border-gray-700 mb-4 mr-14" />
            </div>


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

            <br className="my-8" />

            <div className='ml-13 mb-8'>
                <h1 className="text-3xl font-bold">ACTIVIDADES</h1>
                <p className="text-m font-bold mb-2 text-gray-700">Resumen de las actividades principales</p>
                <hr className="p-2 border-gray-700 mb-4 mr-14" />
            </div>

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

        </DashboardLayout>
    );
};

export default DashBoardHome;