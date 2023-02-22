import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../common/components/hoc/withPageTitle';

function Home() {
  return (
    <Typography variant="h1">
      Vite + React + Typescript + Material Tailwind
    </Typography>
  );
}

export default withPageTitle(Home);
