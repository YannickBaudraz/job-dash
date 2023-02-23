import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../common/components/Logo';

/**
 * Using tailwindcss
 * @constructor
 */
export default function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 z-[51] h-screen min-w-[15rem] bg-white bg-opacity-75 shadow-xl backdrop-blur-2xl backdrop-saturate-200">
        <header className="mt-2 flex h-20 items-center mix-blend-darken">
          <Logo />
        </header>
        <nav className="px-2 py-4">
          <ul>
            <li className="flex items-center rounded-lg py-2 px-4">
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              <span className="font-semibold">Dashboard</span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
