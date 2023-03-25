import { collection, query } from 'firebase/firestore';
import { useMemo } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { CollectionName } from '../../model/Collection';
import Model from '../../model/Model';
import FirestoreModelConverter from '../converter/FirestoreModelConverter';

export default function useLiveCollection<T extends Model>(
  collectionName: CollectionName
) {
  const firestore = useFirestore();

  const converter = useMemo(
    () => new FirestoreModelConverter<T>().converter,
    []
  );

  const { data, status, error } = useFirestoreCollectionData<T>(
    query(collection(firestore, collectionName).withConverter(converter)),
    { idField: 'id' }
  );

  if (error) throw error;

  return { data: data ?? [], status };
}
