import { getAuth } from 'firebase/auth';
import { PropsWithChildren } from 'react';
import { AuthProvider, useFirebaseApp } from 'reactfire';

export default function AuthAdapter({ children }: PropsWithChildren) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
}
