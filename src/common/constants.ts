const Constants = {
  App: {
    Name: import.meta.env.VITE_APP_NAME,
  },
  Firebase: {
    ApiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    ProjectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    AuthDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    StorageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    MessagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    AppId: import.meta.env.VITE_FIREBASE_APP_ID,
    MeasurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  },
};

export default Constants;
