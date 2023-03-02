import { ThemeProvider } from '@material-tailwind/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux/es/exports';
import { useFirebaseApp } from 'reactfire';
import store from './store/store';
import AuthLayout from './view/layout/AuthLayout';
import Login from './view/page/Login';

function JobDashApplication() {
  const app = useFirebaseApp();
  console.log('Firebase app', app);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ReduxProvider store={store}>
          <AuthLayout>
            <Login />
          </AuthLayout>
        </ReduxProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default JobDashApplication;
