import { ThemeProvider } from '@material-tailwind/react';
import { getAuth } from 'firebase/auth';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux/es/exports';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import Router from './routing/Router';
import store from './store/store';

function JobDashApplication() {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider sdk={auth}>
          <ReduxProvider store={store}>
            <Router />
          </ReduxProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default JobDashApplication;
