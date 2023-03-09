import { Button } from '@material-tailwind/react';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import AlreadyHaveAccountLink from '../../common/component/Link/AlreadyHaveAccountLink';
import Loader from '../../common/component/loader/Loader';
import useFirebaseAuthForm from '../../common/hook/useFirebaseAuthForm';
import { AuthForm } from '../template/AuthForm';

export default function RegisterForm() {
  const {
    isLoading,
    register,
    formState: { errors },
    registerWithCredentials,
    authWithGoogle,
    authWithGitHub,
  } = useFirebaseAuthForm();

  return (
    <AuthForm
      onSubmit={registerWithCredentials}
      inputs={
        <>
          {isLoading && <Loader />}
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
          Register
        </Button>
      }
      secondaryActions={
        <>
          <GoogleButton text="Register" onClick={authWithGoogle} />
          <GithubButton text="Register" onClick={authWithGitHub} />
          <AlreadyHaveAccountLink />
        </>
      }
      rootError={errors.root}
    />
  );
}
