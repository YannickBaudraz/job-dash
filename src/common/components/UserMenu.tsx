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
        <Button color="deep-purple">Yannick Baudraz</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => console.log('Logout')}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
