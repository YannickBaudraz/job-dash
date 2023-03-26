import { Outlet } from 'react-router-dom';
import ClickOutsideSidebarProvider from '../../common/context/sidebar/ClickOutsideSidebarProvider';
import useMediaQuery, {
  MediaRule,
  MediaSize,
} from '../../common/hook/useMediaQuery';
import AuthGate from '../../routing/AuthGate';
import LaptopSidebar from '../navigation/LaptopSidebar';
import MobileSidebar from '../navigation/MobileSidebar';
import { TopBar } from '../navigation/TopBar';

export default function DashboardLayout() {
  const isLaptop = useMediaQuery(MediaRule.Min, MediaSize.Lg);

  return (
    <AuthGate>
      <div className="grid grid-cols-[auto,min-content] bg-blue-gray-50/50 lg:grid-cols-[min-content,1fr]">
        <ClickOutsideSidebarProvider>
          {isLaptop ? <LaptopSidebar /> : <MobileSidebar />}
          <div>
            <TopBar />
            <main className="mx-auto w-[90%] pt-4 lg:pt-8">
              <Outlet />
            </main>
          </div>
        </ClickOutsideSidebarProvider>
      </div>
    </AuthGate>
  );
}
