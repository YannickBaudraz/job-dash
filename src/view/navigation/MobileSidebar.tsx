import { XMarkIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useClickOutsideSidebar from '../../common/context/sidebar/useClickOutsideSidebar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Sidebar } from '../../store/sidebar/sidebarSlice';
import styles from './MobileSidebar.module.css';
import NavMenu from './NavMenu';

export default function MobileSidebar() {
  const { isOpen } = useAppSelector(state => state.sidebar);
  const dispatch = useAppDispatch();
  const close = () => dispatch(Sidebar.Actions.close());

  const location = useLocation();
  useEffect(() => {
    close();
  }, [location]);

  const ref = useRef<HTMLDivElement>(null);
  useClickOutsideSidebar(ref, close);

  return (
    <aside
      ref={ref}
      className={`${styles.mobileSidebar} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <nav className="flex flex-col">
        <IconButton
          color="deep-purple"
          variant="text"
          className="mb-1 ml-auto mr-1 mt-1 p-0"
          onClick={close}
        >
          <XMarkIcon className="h-6 w-6" />
        </IconButton>
        <NavMenu />
      </nav>
    </aside>
  );
}
