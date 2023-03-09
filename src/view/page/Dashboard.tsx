import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../common/component/hoc/withPageTitle';

function Dashboard() {
  return (
    <Typography variant="h1">
      Vite + React + Typescript + Material Tailwind + Redux + Firebase + React
      Router
    </Typography>
  );
}

Dashboard.displayName = 'Dashboard';

export default withPageTitle(Dashboard);
