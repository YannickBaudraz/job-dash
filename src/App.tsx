import { Typography } from '@material-tailwind/react';
import { Helmet } from 'react-helmet-async';
import logo from './assets/logo/logo_transparent.png';
import Constants from './common/constants';

function App() {
  return (
    <>
      <Helmet>
        <title>{Constants.App.Name} - Home</title>
      </Helmet>

      <nav>
        <img
          src={logo}
          alt="logo"
          width="250"
          height="110"
          style={{ objectFit: 'cover' }}
        />
      </nav>
      <main>
        <Typography variant="h1" color="indigo">
          Vite + React + Typescript + Material Tailwind
        </Typography>
      </main>
    </>
  );
}

export default App;
