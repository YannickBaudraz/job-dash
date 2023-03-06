import { Button } from '@material-tailwind/react';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import NoAccountLink from '../../common/component/Link/NoAccountLink';
import useFirebaseAuthForm from '../../common/hook/useFirebaseAuthForm';
import { AuthForm } from '../template/AuthForm';

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    loginWithCredentials,
    authWithGoogle,
    authWithGitHub,
  } = useFirebaseAuthForm();

  return (
    <AuthForm
      onSubmit={loginWithCredentials}
      inputs={
        <>
          {errors.root && (
            <span className="text-sm text-red-400">{errors.root.message}</span>
          )}
          <ThemedInput
            {...register('email', { required: 'Email is required' })}
            error={errors.email}
          />
          <ThemedInput
            {...register('password', { required: 'Password is required' })}
            error={errors.password}
          />
        </>
      }
      mainAction={
        <Button size="lg" color="deep-purple" fullWidth type="submit">
          Log in
        </Button>
      }
      secondaryActions={
        <>
          <GoogleButton text="Log in" onClick={authWithGoogle} />
          <GithubButton text="Log in" onClick={authWithGitHub} />
          <NoAccountLink />
        </>
      }
    />
  );
}
