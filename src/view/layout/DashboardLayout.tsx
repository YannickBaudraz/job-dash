import { Outlet } from 'react-router-dom';
import { useFirestore } from 'reactfire';
import AuthGate from '../../routing/AuthGate';
import Sidebar from '../navigation/Sidebar';
import { TopBar } from '../navigation/TopBar';

export default function DashboardLayout() {
  const useFirestore1 = useFirestore();
  console.log(useFirestore1.toJSON());

  return (
    <AuthGate>
      <div className="grid grid-cols-[auto,1fr] bg-blue-gray-50/50">
        <Sidebar />
        <div>
          <TopBar />
          <main className="mx-auto w-[90%] pt-16">
            <Outlet />
          </main>
        </div>
      </div>
    </AuthGate>
  );
}
