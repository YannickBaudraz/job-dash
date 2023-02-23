import { Navbar } from '@material-tailwind/react';
import Logo from '../../common/components/Logo';
import UserMenu from '../../common/components/UserMenu';

export function TopBar() {
  return (
    <Navbar className="sticky top-0 z-50 flex max-w-full items-center justify-between py-2 px-4 shadow-[0px_5px_5px_0px_#00000024] lg:py-4 lg:px-16">
      <Logo />
      <UserMenu />
    </Navbar>
  );
}
