import { FirebaseOptions } from 'firebase/app';
import Constants from '../common/constants';

const Firebase = Constants.Firebase;

const firebaseConfig: FirebaseOptions = {
  apiKey: Firebase.ApiKey,
  authDomain: Firebase.AuthDomain,
  projectId: Firebase.ProjectId,
  storageBucket: Firebase.StorageBucket,
  messagingSenderId: Firebase.MessagingSenderId,
  appId: Firebase.AppId,
  measurementId: Firebase.MeasurementId,
};

export default firebaseConfig;
