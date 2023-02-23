import { Navbar } from '@material-tailwind/react';
import Logo from '../../common/components/Logo';
import UserMenu from '../../common/components/UserMenu';

export function TopBar() {
  return (
    <Navbar className="sticky top-0 max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="mx-auto flex items-center justify-between">
        <Logo />
        <UserMenu />
      </div>
    </Navbar>
  );
}
