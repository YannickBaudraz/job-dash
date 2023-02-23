import {
  faCaretDown,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <FontAwesomeIcon icon={faUser} />
          Yannick Baudraz
          <FontAwesomeIcon icon={faCaretDown} />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => console.log('Logout')}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
