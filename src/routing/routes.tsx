import { RouteObject } from 'react-router-dom';
import AuthLayout from '../view/layout/AuthLayout';
import DashboardLayout from '../view/layout/DashboardLayout';
import Login from '../view/page/auth/Login';
import Register from '../view/page/auth/Register';
import Dashboard from '../view/page/Dashboard';
import AllJobs from '../view/page/job/Jobs';
import NewJob from '../view/page/job/NewJob';
import Profile from '../view/page/Profile';
import route from './route';

const routes: RouteObject[] = [
  {
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: route('jobs'),
        children: [
          { index: true, element: <AllJobs /> },
          { path: route('jobsCreate'), element: <NewJob /> },
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

export default routes;
