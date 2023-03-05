import { Button } from '@material-tailwind/react';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import ThemedInput from '../../common/component/form/input/ThemedInput';
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

  async function onSubmit(data: AuthInputs) {
    try {
      await registerBasically(data);
    } catch (error) {
      if (!(error instanceof FirebaseError)) throw error;
      handleFirebaseError(error);
    }
  }

  async function registerBasically(data: AuthInputs) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const displayName = data.email
      .split('@')[0]
      .replace(/[-._]/g, ' ')
      .replace(/\w\S*/g, l => l.charAt(0).toUpperCase() + l.slice(1));
    await updateProfile(userCredential.user, { displayName });

    console.log({ userCredential, auth });
    alert(`Welcome ${userCredential.user.displayName}`);
    reset();
  }

  async function registerWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);

    console.log({ userCredential, auth });
    alert(`Welcome ${userCredential.user.displayName}`);
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
          Register
        </Button>
      }
      secondaryActions={
        <>
          <GoogleButton text="Register" onClick={registerWithGoogle} />
          <GithubButton text="Register" />
          <AlreadyHaveAccountLink />
        </>
      }
    />
  );
}
