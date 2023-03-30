import { Timestamp } from 'firebase/firestore';

export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

export function isTimestamp(value: unknown): value is Timestamp {
  return value instanceof Timestamp;
}
