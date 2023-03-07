import { faBriefcase, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Logo from '../../common/component/media/Logo';
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
      <nav className="sticky top-0 flex flex-col">
        <header className="flex h-24 items-center justify-center">
          <Logo className="px-10 mix-blend-darken" />
        </header>
        <ul className="mt-12 ml-10 flex flex-col gap-8">
          <Link to="/" className="flex gap-4">
            <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
            <Typography color="blue-gray" className="font-medium">
              Dashboard
            </Typography>
          </Link>
          <Link to="/all-jobs" className="flex gap-4">
            <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
            <Typography color="blue-gray" className="font-medium">
              All jobs
            </Typography>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
