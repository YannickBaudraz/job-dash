import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './config/firebaseConfig';
import JobDashApplication from './JobDashApplication';
import './main.css';

import('./register/chartJsRegister').then(value => value.default());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <JobDashApplication />
    </FirebaseAppProvider>
  </React.StrictMode>
);
