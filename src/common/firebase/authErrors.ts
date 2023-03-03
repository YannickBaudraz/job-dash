export type AuthInputs = {
  email: string;
  password: string;
};

export type AuthError = {
  input: keyof AuthInputs | 'root';
  code: string;
  message?: string;
};

/**
 * This is the list of all the errors that can be returned by the Firebase Auth API.
 * @see https://firebase.google.com/docs/auth/admin/errors
 * @see https://github.com/firebase/firebase-js-sdk/blob/a831aec9ec82d146fef7a0f7cf2d31081bd08d4b/packages-exp/auth-exp/src/core/errors.ts
 */
const authErrors: AuthError[] = [
  {
    input: 'email',
    code: 'auth/email-already-in-use',
    message: 'Email already used',
  },
  {
    input: 'email',
    code: 'auth/invalid-email',
    message: 'Invalid email address',
  },
  {
    input: 'email',
    code: 'auth/user-not-found',
    message: 'User not found',
  },
  {
    input: 'password',
    code: 'auth/weak-password',
    message: 'Password must be at least 6 characters',
  },
  {
    input: 'password',
    code: 'auth/wrong-password',
    message: 'Wrong password',
  },
  // The unknown error need to be the last one, ALWAYS
  {
    input: 'root',
    code: 'auth/unknown',
    message: 'Something went wrong',
  },
];

/**
 * Get the error object from the list of errors.
 * @param errorCode The error code returned by the Firebase Auth API.
 * @returns The error object.
 * @see https://firebase.google.com/docs/auth/admin/errors
 * @see https://github.com/firebase/firebase-js-sdk/blob/a831aec9ec82d146fef7a0f7cf2d31081bd08d4b/packages-exp/auth-exp/src/core/errors.ts
 */
export function getAuthError(errorCode: string): AuthError {
  return (
    authErrors.find(error => error.code === errorCode) ??
    authErrors[authErrors.length - 1]
  );
}
