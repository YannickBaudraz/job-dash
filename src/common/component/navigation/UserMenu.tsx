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
import { signOut } from 'firebase/auth';
import { useCallback } from 'react';
import { useAuth } from 'reactfire';

export default function UserMenu() {
  const auth = useAuth();

  const logOut = useCallback(async () => {
    await signOut(auth);
  }, []);

  return (
    <Menu>
      <MenuHandler>
        <Button color="deep-purple" className="flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          Yannick Baudraz
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={logOut}>
          <div className="flex items-center gap-2">
            <ArrowRightOnRectangleIcon className="h-4 w-4" />
            Logout
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
