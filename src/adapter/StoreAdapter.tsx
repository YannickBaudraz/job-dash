import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux/es/exports';
import index from '../store';

export default function StoreAdapter({ children }: PropsWithChildren) {
  return <ReduxProvider store={index}>{children}</ReduxProvider>;
}
