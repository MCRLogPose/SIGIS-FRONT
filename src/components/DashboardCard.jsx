import { Link } from 'react-router-dom';

const DashboardCard = ({ title, to, image, icon: Icon, buttonText }) => {
  return (
    <div className="bg-transparent border-2 border-slate-300 rounded-lg p-4 shadow text-center">
      <img 
        src={image}
        alt={title} 
        className="w-full h-70 object-cover object-top rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <Link 
        to={to} 
        className="h-12 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
      >
        <Icon size={24} />
        <span className="font-medium">{buttonText}</span>
      </Link>
    </div>
  );
};

export default DashboardCard;