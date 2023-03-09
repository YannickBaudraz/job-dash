import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';
import AllScreenLoader from '../common/component/loader/AllScreenLoader';
import { route } from './routes';

type AuthGateProps = PropsWithChildren & {
  requireGuest?: boolean;
};

export default function AuthGate({ requireGuest, children }: AuthGateProps) {
  const { data: signInCheckResult, status } = useSigninCheck();
  const signedIn = signInCheckResult?.signedIn;

  if (status === 'loading') return <AllScreenLoader />;

  const shouldAuth = !requireGuest && !signedIn;
  if (shouldAuth) return <Navigate to={route('login')} />;

  const isUselessAuthAction = requireGuest && signedIn;
  if (isUselessAuthAction) return <Navigate to={route('home')} />;

  return <>{children}</>;
}
