// src/components/incidents/cards/DashboardCard.jsx

import GenericButton from '@/components/cammon/buttons/GenericButton';

const DashboardCard = ({ title, to, onClick, image, icon: Icon, buttonText }) => {
    return (
        <div className="bg-transparent border-2 border-slate-300 rounded-lg shadow text-center w-full max-w-96 mx-auto">
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover object-top rounded mb-3"
            />
            <h2 className="text-lg font-bold mb-4">{title}</h2>

            <GenericButton
                to={to}
                onClick={onClick}
                icon={Icon}
                className="w-full"
            >
                {buttonText}
            </GenericButton>
        </div>
    );
};

export default DashboardCard;