import { ThemeProvider } from '@material-tailwind/react';
import { getAuth } from 'firebase/auth';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux/es/exports';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import store from './store/store';
import AuthLayout from './view/layout/AuthLayout';
import Register from './view/page/Register';

function JobDashApplication() {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider sdk={auth}>
          <ReduxProvider store={store}>
            <AuthLayout>
              <Register />
            </AuthLayout>
          </ReduxProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default JobDashApplication;
