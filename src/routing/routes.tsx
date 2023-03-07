import { RouteObject } from 'react-router-dom';
import AuthLayout from '../view/layout/AuthLayout';
import DashboardLayout from '../view/layout/DashboardLayout';
import AllJobs from '../view/page/AllJobs';
import Login from '../view/page/Login';
import Register from '../view/page/Register';
import Stats from '../view/page/Stats';

type RoutePathMap<RoutePath extends Record<string, string>> = {
  readonly [K in keyof RoutePath]: RoutePath[K];
};

const RoutePaths = {
  login: '/login',
  register: '/register',
  home: '/',
  jobs: '/jobs',
} as const;

type RoutePath = RoutePathMap<typeof RoutePaths>;

function route<T extends keyof RoutePath>(path: T): RoutePath[T] {
  return RoutePaths[path];
}

const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      { path: route('login'), element: <Login />, index: true },
      { path: route('register'), element: <Register /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: route('home'), element: <Stats />, index: true },
      { path: route('jobs'), element: <AllJobs /> },
    ],
  },
];

export { route };

export default routes;
