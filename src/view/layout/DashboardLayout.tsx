import { Outlet } from 'react-router-dom';
import useMediaQuery, {
  MediaRule,
  MediaSize,
} from '../../common/hook/useMediaQuery';
import AuthGate from '../../routing/AuthGate';
import LaptopSidebar from '../navigation/LaptopSidebar';
import { TopBar } from '../navigation/TopBar';

export default function DashboardLayout() {
  const isLaptop = useMediaQuery(MediaRule.Min, MediaSize.Lg);

  return (
    <AuthGate>
      <div className="grid grid-cols-[auto,1fr] bg-blue-gray-50/50">
        {isLaptop && <LaptopSidebar />}
        <div>
          <TopBar />
          <main className="mx-auto w-[90%] pt-10">
            <Outlet />
          </main>
        </div>
      </div>
    </AuthGate>
  );
}
