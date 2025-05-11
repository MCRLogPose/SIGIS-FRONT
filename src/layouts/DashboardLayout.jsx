import Sidebar from '@/components/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto bg-gray-200">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
