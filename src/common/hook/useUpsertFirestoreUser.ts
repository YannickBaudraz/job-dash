import { doc, setDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { useFirestore } from 'reactfire';
import User from '../../model/User';
import FirestoreModelConverter from '../converter/FirestoreModelConverter';
import modelConverter from '../converter/ModelConverter';
import { cleanBeforeSentToFirestore } from '../firebase/firebaseUtils';

type UserCreateFirestore = {
  email: string;
  name?: string | null;
  location?: string;
};

export default function useUpsertFirestoreUser() {
  const firestore = useFirestore();

  return useCallback(async (data: UserCreateFirestore, userId: string) => {
    const user = modelConverter.fromUserFormInputsToFirestoreUser(data, userId);
    const userForFirestore = cleanBeforeSentToFirestore(user);
    console.log('userForFirestore', userForFirestore);
    const userDoc = doc(firestore, 'users', userId).withConverter(
      new FirestoreModelConverter<User>().converter
    );
    await setDoc(userDoc, userForFirestore);
  }, []);
}
