import Logo from '../../common/component/media/Logo';
import { useAppSelector } from '../../store/hooks';
import NavMenu from './NavMenu';
import styles from './Sidebar.module.css';

/**
 * Using tailwindcss
 * @constructor
 */
export default function Sidebar() {
  const { isOpen } = useAppSelector(state => state.sidebar);

  return (
    <aside
      className={`${styles.sidebar} ${
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
