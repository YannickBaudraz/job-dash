import { Typography } from '@material-tailwind/react';
import { Helmet } from 'react-helmet-async';
import { getPageTitle } from '../../common/utils';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{getPageTitle('Home')}</title>
      </Helmet>

      <Typography variant="h1">
        Vite + React + Typescript + Material Tailwind
      </Typography>
    </>
  );
}
