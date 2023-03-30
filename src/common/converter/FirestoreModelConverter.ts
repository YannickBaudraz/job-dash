import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  Timestamp,
} from 'firebase/firestore';
import Model, { CreateModel } from '../../model/Model';
import { isDate, isTimestamp } from '../type/guards';

export default class FirestoreModelConverter<
  T extends Model | CreateModel<Model>
> {
  get converter(): FirestoreDataConverter<T> {
    return {
      toFirestore: this.toFirestore,
      fromFirestore: this.fromFirestore,
    };
  }

  private get toFirestore(): (doc: T) => DocumentData {
    return (doc: T): DocumentData => this.fromCamelToSnakeCase(doc);
  }

  private get fromCamelToSnakeCase(): (doc: T) => DocumentData {
    return (doc: T): DocumentData =>
      Object.keys(doc).reduce((acc, key) => {
        const snakeCaseKey = key.replace(
          /([A-Z])/g,
          $1 => `_${$1.toLowerCase()}`
        );

        const value = doc[key as keyof T];
        acc[snakeCaseKey] = isDate(value) ? Timestamp.fromDate(value) : value;

        return acc;
      }, {} as DocumentData);
  }

  private get fromFirestore(): (snapshot: QueryDocumentSnapshot) => T {
    return (snapshot: QueryDocumentSnapshot): T =>
      this.fromSnakeToCamelCase<T>(snapshot.data());
  }

  private fromSnakeToCamelCase<T>(data: DocumentData): T {
    return Object.keys(data).reduce((acc, key) => {
      const camelCaseKey = key.replace(/(_[a-z])/gi, $1 =>
        $1.toUpperCase().replace('_', '')
      );

      const value = data[key];
      acc[camelCaseKey as keyof T] = isTimestamp(value)
        ? value.toDate()
        : value;

      return acc;
    }, {} as T);
  }
}
