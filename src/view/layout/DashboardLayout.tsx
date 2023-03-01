import { PropsWithChildren } from 'react';
import Sidebar from '../navigation/Sidebar';
import { TopBar } from '../navigation/TopBar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[auto,1fr] bg-blue-gray-50/50">
      <Sidebar />
      <div>
        <TopBar />
        <main className="mx-auto w-[90%]">{children}</main>
      </div>
    </div>
  );
}
