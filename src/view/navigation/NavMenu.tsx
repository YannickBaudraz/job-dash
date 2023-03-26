import {
  BriefcaseIcon,
  DocumentPlusIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';
import * as React from 'react';
import { ReactElement, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import route from '../../routing/route';

type MenuItem = {
  icon: ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: ReturnType<typeof route>;
};

export default function NavMenu({ className }: { className?: string }) {
  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        icon: <PresentationChartLineIcon />,
        title: 'Dashboard',
        path: route('home'),
      },
      {
        icon: <BriefcaseIcon />,
        title: 'All jobs',
        path: route('jobs'),
      },
      {
        icon: <DocumentPlusIcon />,
        title: 'New job',
        path: route('jobsCreate'),
      },
      {
        icon: <UserCircleIcon />,
        title: 'Profile',
        path: route('profile'),
      },
    ],
    []
  );

  return (
    <section className={className}>
      <ul className="flex flex-col">
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
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          `flex gap-4 py-4 pl-10 text-blue-gray-700 ${
            isActive ? 'bg-deep-purple-50 text-deep-purple-500' : ''
          } transition-all duration-300 hover:pl-12 hover:text-deep-purple-500`
        }
      >
        <icon.type {...icon.props} className={`h-6 w-6`} />
        <Typography className="font-medium">{title}</Typography>
      </NavLink>
    </li>
  );
}
