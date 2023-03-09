import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { useState } from 'react';
import { useAuth, useUser } from 'reactfire';

export default function UserMenu() {
  const auth = useAuth();
  const { data: user } = useUser();
  const [userName] = useState(user?.displayName ?? user?.email ?? 'User');

  return (
    <Menu>
      <MenuHandler>
        <Button color="deep-purple" className="flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          {userName}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={auth.signOut}>
          <div className="flex items-center gap-2">
            <ArrowRightOnRectangleIcon className="h-4 w-4" />
            Logout
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
