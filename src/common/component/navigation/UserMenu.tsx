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

export default function UserMenu() {
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
        <MenuItem onClick={() => console.log('Logout')}>
          <div className="flex items-center gap-2">
            <ArrowRightOnRectangleIcon className="h-4 w-4" />
            Logout
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
