import { PropsWithChildren } from 'react';
import Sidebar from '../navigation/Sidebar';
import { TopBar } from '../navigation/TopBar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <div>
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
