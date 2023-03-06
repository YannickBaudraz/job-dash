import { ThemeProvider } from '@material-tailwind/react';
import { getAuth } from 'firebase/auth';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux/es/exports';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import store from './store/store';
import AuthLayout from './view/layout/AuthLayout';
import Login from './view/page/Login';

function JobDashApplication() {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider sdk={auth}>
          <ReduxProvider store={store}>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </ReduxProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default JobDashApplication;
