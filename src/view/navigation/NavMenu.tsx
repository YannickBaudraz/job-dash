import {
  BriefcaseIcon,
  DocumentPlusIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';
import * as React from 'react';
import { ReactElement, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { route } from '../../routing/routes';

type MenuItem = {
  icon: ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
};

export function NavMenu({ className }: { className?: string }) {
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
        title: 'Add job',
        path: route('jobs.create'),
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
        <icon.type {...icon.props} className="h-6 w-6" />
        <Typography color="blue-gray" className="font-medium">
          {title}
        </Typography>
      </Link>
    </li>
  );
}
