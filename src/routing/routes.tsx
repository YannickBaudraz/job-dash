import { RouteObject } from 'react-router-dom';
import AuthLayout from '../view/layout/AuthLayout';
import DashboardLayout from '../view/layout/DashboardLayout';
import Login from '../view/page/auth/Login';
import Register from '../view/page/auth/Register';
import Dashboard from '../view/page/Dashboard';
import CreateJob from '../view/page/job/CreateJob';
import AllJobs from '../view/page/job/Jobs';
import { Profile } from '../view/page/profile/Profile';

type RoutePathMap<RoutePath extends Record<string, string>> = {
  readonly [K in keyof RoutePath]: RoutePath[K];
};

const RoutePaths = {
  home: '/',
  jobs: '/jobs',
  'jobs.create': '/jobs/create',
  profile: '/profile',
  login: '/login',
  register: '/register',
} as const;

type RoutePath = RoutePathMap<typeof RoutePaths>;

function route<T extends keyof RoutePath>(path: T): RoutePath[T] {
  return RoutePaths[path];
}

const routes: RouteObject[] = [
  {
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: route('jobs'),
        children: [
          { index: true, element: <AllJobs /> },
          { path: route('jobs.create'), element: <CreateJob /> },
        ],
      },
      { path: route('profile'), element: <Profile /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: route('login'), element: <Login />, index: true },
      { path: route('register'), element: <Register /> },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];

export { route };

export default routes;
