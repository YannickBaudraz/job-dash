import { Button } from '@material-tailwind/react';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import ThemedInput from '../../common/component/form/ThemedInput';
import AlreadyHaveAccountLink from '../../common/component/Link/AlreadyHaveAccountLink';
import { AuthInputs, getAuthError } from '../../common/firebase/authErrors';
import { AuthForm } from '../template/AuthForm';

export default function RegisterForm() {
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<AuthInputs>();

  const onSubmit: SubmitHandler<AuthInputs> = async data => {
    try {
      await signInBasically(data);
      console.log(auth);
    } catch (error) {
      if (!(error instanceof FirebaseError)) throw error;
      handleFirebaseError(error);
    }
  };

  async function signInBasically(data: AuthInputs) {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    reset();
  }

  function handleFirebaseError(error: FirebaseError) {
    const authError = getAuthError(error.code);
    setError(authError.input, { type: 'manual', message: authError.message });
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      inputs={
        <>
          {errors.root && (
            <span className="text-sm text-red-400">{errors.root.message}</span>
          )}
          <div>
            <ThemedInput
              label="Email"
              type="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              error={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <ThemedInput
              label="Password"
              type="password"
              aria-invalid={errors.password ? 'true' : 'false'}
              error={!!errors.password}
              {...register('password')}
            />
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>
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
          Register
        </Button>
      }
      secondaryActions={
        <>
          <GoogleButton action="Register" />
          <GithubButton action="Register" />
          <AlreadyHaveAccountLink />
        </>
      }
    />
  );
}
