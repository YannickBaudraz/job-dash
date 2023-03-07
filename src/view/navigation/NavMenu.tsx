import {
  faBriefcase,
  faChartLine,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { route } from '../../routing/routes';

type MenuItem = {
  icon: IconDefinition;
  title: string;
  path: string;
};

export function NavMenu({ className }: { className?: string }) {
  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        icon: faChartLine,
        title: 'Dashboard',
        path: route('home'),
      },
      {
        icon: faBriefcase,
        title: 'All jobs',
        path: route('jobs'),
      },
      {
        icon: faBriefcase,
        title: 'Add job',
        path: route('jobs.create'),
      },
      {
        icon: faBriefcase,
        title: 'Profile',
        path: route('profile'),
      },
    ],
    []
  );

  return (
    <section className={className}>
      <ul className="flex flex-col gap-8">
        {menuItems.map(({ path, icon, title }) => (
          <NavMenuItem key={path} path={path} icon={icon} title={title} />
        ))}
      </ul>
    </section>
  );
}

function NavMenuItem({ path, icon, title }: MenuItem) {
  return (
    <li>
      <Link to={path} className="flex gap-4">
        <FontAwesomeIcon icon={icon} className="text-2xl text-blue-gray-600" />
        <Typography color="blue-gray" className="font-medium">
          {title}
        </Typography>
      </Link>
    </li>
  );
}
