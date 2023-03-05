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
  {
    input: 'root',
    code: 'auth/account-exists-with-different-credential',
    message: 'Account already exists with different credentials',
  },
  {
    input: 'root',
    code: 'auth/too-many-requests',
    message: 'Too many requests',
  },
];

const unknownError: AuthError = {
  input: 'root',
  code: 'auth/unknown',
  message: 'Something went wrong',
};

const isFalsePositive = (errorCode: string) =>
  ['auth/popup-closed-by-user'].includes(errorCode);

/**
 * Get the error object from the list of errors.
 * @param errorCode The error code returned by the Firebase Auth API.
 * @returns The error object.
 * @see https://firebase.google.com/docs/auth/admin/errors
 * @see https://github.com/firebase/firebase-js-sdk/blob/a831aec9ec82d146fef7a0f7cf2d31081bd08d4b/packages-exp/auth-exp/src/core/errors.ts
 */
export function getAuthError(errorCode: string) {
  if (isFalsePositive(errorCode)) return null;

  const authError = authErrors.find(error => error.code === errorCode);
  if (!authError)
    console.error(
      "Error code doesn't exist in the list of errors :",
      errorCode
    );

  return authError ?? unknownError;
}
