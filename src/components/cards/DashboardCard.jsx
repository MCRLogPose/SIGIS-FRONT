import { Link } from 'react-router-dom';

const DashboardCard = ({ title, to, image, icon: Icon, buttonText }) => {
return (
    <div className="bg-transparent border-2 border-slate-300 rounded-lg shadow text-center w-full max-w-96 mx-auto">
        <img 
            src={image}
            alt={title} 
            className="w-full h-56 object-cover object-top rounded mb-3"
        />
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <Link 
            to={to} 
            className="h-10 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-3 rounded-lg hover:bg-gray-600 transition duration-300"
        >
            <Icon size={20} />
            <span className="font-medium">{buttonText}</span>
        </Link>
    </div>
);
};

export default DashboardCard;