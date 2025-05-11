import { Link } from 'react-router-dom';
import { LayoutDashboard, FolderOpen, Clock, Megaphone, LogOut, UserCog, BookOpenCheck, Replace } from 'lucide-react';
import logoSygis from '@/assets/logos/logo_sygis.png';

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-6">
            {/* Logo and App Name */}
            <div className="flex flex-col items-center mb-8">
                <img src={logoSygis} alt="Logo SIGIS" className="w-16 h-16" />
                <span className="text-xl font-bold mt-2">SIGIS APP</span>
            </div>

            {/* Opciones para vista home y historial */}
            <div className="text-gray-400 text-sm uppercase mb-2 font-bold">Discover</div>
            <hr className="p-2 border-gray-400" />
            <nav className="flex flex-col space-y-4">
                <Link to="/home" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <LayoutDashboard size={18} /> Resumen General
                </Link>
                <Link to="/dashboard/historial" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <Clock size={18} /> Historial
                </Link>
            </nav>

            <br className="my-3" />
            {/* User Info */}
            <div className="text-gray-400 text-sm uppercase mb-2 font-bold">WORK</div>
            <hr className="p-2 border-gray-400" />
            <nav className="flex flex-col space-y-4">
                <Link to="/dashboard/mis-casos" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <FolderOpen size={18} /> Mis Casos
                </Link>
                <Link to="/dashboard/novedades" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <Megaphone size={18} /> Novedades
                </Link>
                <Link to="/dashboard/asignar-casos" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <BookOpenCheck size={18} /> Asignar Casos
                </Link>
                <Link to="/dashboard/seguimientos" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <Replace size={18} /> Seguimientos
                </Link>
            </nav>

            <br className="my-3" />
            {/* Opciones configuraciones de sistema salir y controlar usuarios */}
            <div className="text-gray-400 text-sm uppercase mb-2 font-bold">Settings</div>
            <hr className="p-2 border-gray-400" />
            <nav className="flex flex-col space-y-4">
                <Link to="/dashboard/gestionar-usuarios" className="flex items-center gap-2 hover:text-blue-300 font-medium text-gray-200">
                    <UserCog size={18} /> Gestionar Usuarios
                </Link>
                <Link to="/login" className="flex items-center gap-2 text-red-400 hover:text-red-300 font-medium text-gray-200">
                    <LogOut size={18} /> Salir
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;