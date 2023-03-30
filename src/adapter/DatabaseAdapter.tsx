import { PropsWithChildren } from 'react';
import { FirestoreProvider } from 'reactfire';
import AllScreenLoader from '../common/component/loader/AllScreenLoader';
import { useInitializeFirestore } from '../common/hook/useInitializeFirestore';

export default function DatabaseAdapter({ children }: PropsWithChildren) {
  const { firestore } = useInitializeFirestore();

  return firestore ? (
    <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
  ) : (
    <AllScreenLoader />
  );
}
