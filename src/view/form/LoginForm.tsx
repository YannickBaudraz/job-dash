import { Button } from '@material-tailwind/react';
import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import NoAccountLink from '../../common/component/Link/NoAccountLink';
import { AuthInputs, getAuthError } from '../../common/firebase/authErrors';
import { AuthForm } from '../template/AuthForm';

export default function LoginForm() {
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<AuthInputs>();

  async function onSubmit(data: AuthInputs) {
    try {
      await loginBasically(data);
      console.log('Successfully logged in', auth.currentUser);
    } catch (error) {
      if (!(error instanceof FirebaseError)) throw error;
      handleFirebaseError(error);
    }
  }

  async function loginBasically(data: AuthInputs) {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    reset();
  }

  function handleFirebaseError(error: FirebaseError) {
    const authError = getAuthError(error.code);
    setError(authError.input, { type: 'manual', message: authError.message });
  }

  return (
    <AuthForm
      onSubmit={() => console.log('submit')}
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
        <Button
          size="lg"
          color="deep-purple"
          fullWidth
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Log in
        </Button>
      }
      secondaryActions={
        <>
          <GoogleButton action="Log in" />
          <GithubButton action="Log in" />
          <NoAccountLink />
        </>
      }
    />
  );
}
