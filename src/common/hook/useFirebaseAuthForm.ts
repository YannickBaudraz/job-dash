import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'reactfire';
import { AuthInputs, getAuthError } from '../firebase/authErrors';

/**
 * @description A custom hook that provides a form for authentication with Firebase. <br/>
 * You must wrap your app in a FirebaseAuthProvider for this hook to work. <br/>
 * You must create inputs with 'email' and 'password' names in your form if you want to use the
 * login and register methods that use credentials.
 * @returns An object containing the form state, the form methods, and the
 * authentication methods.
 */
export default function useFirebaseAuthForm() {
  const form = useForm<AuthInputs>();
  const { handleSubmit, setError, reset } = form;
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  async function authWithGoogle() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      return await signInWithPopup(auth, provider);
    } catch (error) {
      handleFirebaseError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function authWithGitHub() {
    setIsLoading(true);
    const provider = new GithubAuthProvider();
    try {
      return await signInWithPopup(auth, provider);
    } catch (error) {
      handleFirebaseError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function register(data: AuthInputs) {
    setIsLoading(true);
    const { email, password } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      reset();
      return userCredential;
    } catch (error) {
      handleFirebaseError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function login(data: AuthInputs) {
    setIsLoading(true);
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      reset();
      return userCredential;
    } catch (error) {
      handleFirebaseError(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleFirebaseError(error: unknown) {
    if (!(error instanceof FirebaseError)) throw error;
    const authError = getAuthError(error.code);
    if (!authError) return;
    setError(authError.input, { type: 'manual', message: authError.message });
  }

  return {
    ...form,
    isLoading,
    loginWithCredentials: handleSubmit(login),
    registerWithCredentials: handleSubmit(register),
    authWithGoogle,
    authWithGitHub,
  };
}
