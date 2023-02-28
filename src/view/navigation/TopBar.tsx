import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Typography } from '@material-tailwind/react';
import UserMenu from '../../common/components/UserMenu';
import { useAppDispatch } from '../../store/hooks';
import { Sidebar } from '../../store/sidebar/sidebarSlice';

export function TopBar() {
  const dispatch = useAppDispatch();
  const toggle = () => dispatch(Sidebar.Actions.toggle());

  return (
    <Navbar className="sticky top-0 z-50 flex max-w-full items-center justify-between rounded-none py-4 px-4 shadow-lg lg:py-6 lg:px-16">
      <FontAwesomeIcon
        icon={faBarsStaggered}
        className="cursor-pointer text-2xl"
        color="#673ab7"
        onClick={toggle}
      />
      <Typography variant="h1" className="text-2xl" color="blue-gray">
        Admin Dashboard
      </Typography>
      <UserMenu />
    </Navbar>
  );
}
