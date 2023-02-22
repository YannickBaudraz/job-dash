import { PropsWithChildren } from 'react';
import { TopBar } from '../navigation/TopBar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <TopBar />

      <main>{children}</main>
    </>
  );
}
