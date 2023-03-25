import { FirebaseError } from 'firebase/app';
import {
  enableMultiTabIndexedDbPersistence,
  Firestore,
  initializeFirestore,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useFirebaseApp } from 'reactfire';

let firestorePromise: Promise<Firestore>;

export function useInitializeFirestore() {
  const firebase = useFirebaseApp();
  const [firestore, setFirestore] = useState<Firestore>();
  const [error, setError] = useState<FirebaseError>();

  const configureFirestore = async (): Promise<Firestore> => {
    const fs = initializeFirestore(firebase, {});
    try {
      await enableMultiTabIndexedDbPersistence(fs);
    } catch (error) {
      setError(error as FirebaseError);
    }
    return fs;
  };

  if (!firestorePromise) {
    firestorePromise = configureFirestore();
  }

  useEffect(() => {
    (async () => {
      const waitForFirestore = async () => {
        setFirestore(await firestorePromise);
      };
      await waitForFirestore();
    })();
  }, [setFirestore]);

  return { firestore, error };
}
