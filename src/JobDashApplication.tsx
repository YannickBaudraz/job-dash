import { ThemeProvider } from '@material-tailwind/react';
import { HelmetProvider } from 'react-helmet-async';
import AuthAdapter from './adapter/AuthAdapter';
import DatabaseAdapter from './adapter/DatabaseAdapter';
import StoreAdapter from './adapter/StoreAdapter';
import Router from './routing/Router';

function JobDashApplication() {
  return (
    <AuthAdapter>
      <DatabaseAdapter>
        <StoreAdapter>
          <HelmetProvider>
            <ThemeProvider>
              <Router />
            </ThemeProvider>
          </HelmetProvider>
        </StoreAdapter>
      </DatabaseAdapter>
    </AuthAdapter>
  );
}

export default JobDashApplication;
