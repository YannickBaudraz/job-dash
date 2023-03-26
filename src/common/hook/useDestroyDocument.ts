import { collection, deleteDoc, doc } from 'firebase/firestore';
import { useCallback } from 'react';
import { useFirestore } from 'reactfire';
import { CollectionName } from '../../model/Collection';

export default function useDestroyDocument(
  collectionName: CollectionName,
  id: string
) {
  const firestore = useFirestore();

  const collectionRef = collection(firestore, collectionName);
  const docRef = doc(collectionRef, id);

  return useCallback(async () => {
    await deleteDoc(docRef);
  }, [firestore, collectionName, id]);
}
