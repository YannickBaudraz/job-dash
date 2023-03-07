import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../view/layout/DashboardLayout';
import AllJobs from '../view/page/AllJobs';
import Stats from '../view/page/Stats';

const routes: RouteObject[] = [
  {
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Stats /> },
      { path: '/all-jobs', element: <AllJobs /> },
    ],
  },
];

export default routes;
