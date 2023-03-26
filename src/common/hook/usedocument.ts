import { doc } from 'firebase/firestore';
import { useMemo } from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';
import { CollectionName } from '../../model/Collection';
import Model from '../../model/Model';
import FirestoreModelConverter from '../converter/FirestoreModelConverter';

export default function useDocument<T extends Model>(
  collectionName: CollectionName,
  id: string
) {
  if (!id) throw new Error('id is required.');

  const firestore = useFirestore();

  const converter = useMemo(
    () => new FirestoreModelConverter<T>().converter,
    []
  );

  const { data, status, error } = useFirestoreDocData<T>(
    doc(firestore, collectionName, id).withConverter(converter),
    { idField: 'id' }
  );

  if (status === 'error') throw error;

  return { data: data, status: status };
}
