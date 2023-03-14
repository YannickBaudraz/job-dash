import { XMarkIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Sidebar } from '../../store/sidebar/sidebarSlice';
import styles from './MobileSidebar.module.css';
import NavMenu from './NavMenu';

export default function MobileSidebar() {
  const { isOpen } = useAppSelector(state => state.sidebar);
  const dispatch = useAppDispatch();
  const close = () => dispatch(Sidebar.Actions.close());

  useEffect(() => {
    close();
  }, []);

  return (
    <aside
      className={`${styles.mobileSidebar} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <nav className="flex flex-col">
        <IconButton
          color="deep-purple"
          variant="text"
          className="ml-auto"
          onClick={close}
        >
          <XMarkIcon className="h-6 w-6" />
        </IconButton>
        <NavMenu className="mt-4" />
      </nav>
    </aside>
  );
}
