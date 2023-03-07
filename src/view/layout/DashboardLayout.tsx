import { Outlet } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';
import { TopBar } from '../navigation/TopBar';

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-[auto,1fr] bg-blue-gray-50/50">
      <Sidebar />
      <div>
        <TopBar />
        <main className="mx-auto w-[90%] pt-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
