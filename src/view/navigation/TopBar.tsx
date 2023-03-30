import { Navbar, Typography } from '@material-tailwind/react';
import UserMenu from '../../common/component/navigation/UserMenu';
import Constants from '../../common/constants';
import { useAppSelector } from '../../store/hooks';
import ToggleSidebarButton from './ToggleSidebarButton';

export function TopBar() {
  const { title: documentTitle } = useAppSelector(state => state.document);
  const title = documentTitle.split(' - ')[1] ?? Constants.App.Name;

  return (
    <Navbar className="sticky top-0 z-50 flex h-24 max-w-full items-center justify-between rounded-none py-4 px-4 shadow-lg lg:py-6 lg:px-16">
      <ToggleSidebarButton />
      <Typography variant="h1" className="text-2xl" color="blue-gray">
        {title}
      </Typography>
      <UserMenu />
    </Navbar>
  );
}
