import { useEffect } from 'react';
import Logo from '../../common/component/media/Logo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Sidebar } from '../../store/sidebar/sidebarSlice';
import styles from './LaptopSidebar.module.css';
import NavMenu from './NavMenu';

/**
 * Using tailwindcss
 * @constructor
 */
export default function LaptopSidebar() {
  const { isOpen } = useAppSelector(state => state.sidebar);
  const dispatch = useAppDispatch();
  const open = () => dispatch(Sidebar.Actions.open());

  useEffect(() => {
    open();
  }, []);

  return (
    <aside
      className={`${styles.laptopSidebar} ${
        isOpen ? styles.expanded : styles.collapsed
      }`}
    >
      <nav className="sticky top-0 flex flex-col">
        <header className="flex h-24 items-center justify-center">
          <Logo className="px-10 mix-blend-darken" />
        </header>
        <NavMenu className="mt-8" />
      </nav>
    </aside>
  );
}
