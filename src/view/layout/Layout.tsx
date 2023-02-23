import { PropsWithChildren } from 'react';
import Sidebar from '../navigation/Sidebar';
import { TopBar } from '../navigation/TopBar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <Sidebar />
      <div className="bg-blue-gray-50">
        <TopBar />
        <main className="mx-auto w-[90%]">{children}</main>
      </div>
    </div>
  );
}
