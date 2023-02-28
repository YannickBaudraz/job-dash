import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-tailwind/react';
import Logo from '../../common/components/Logo';
import { useAppSelector } from '../../store/hooks';
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
      <div className="sticky top-0">
        <header className="flex h-[5.5rem] items-center overflow-hidden mix-blend-darken">
          <Logo />
        </header>
        <nav className="mt-5 px-5 py-4">
          <ul>
            <li className="mb-2 flex items-center rounded-lg py-2 px-4">
              <Typography variant="lead" color="gray">
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                Dashboard
              </Typography>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
