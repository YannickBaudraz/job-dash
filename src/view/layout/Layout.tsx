import { PropsWithChildren } from 'react';
import logo from '../../assets/logo/logo_transparent.png';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <nav>
        <img
          src={logo}
          alt="logo"
          width="250"
          height="110"
          style={{ objectFit: 'cover' }}
        />
      </nav>

      <main>{children}</main>
    </>
  );
}
