export type AuthInputs = {
  email: string;
  password: string;
};

export type AuthError = {
  input: keyof AuthInputs | 'root';
  code: string;
  message?: string;
};

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
    input: 'password',
    code: 'auth/weak-password',
    message: 'Password must be at least 6 characters',
  },
];

export function getAuthError(errorCode: string): AuthError {
  return (
    authErrors.find(error => error.code === errorCode) ?? {
      input: 'root',
      code: 'auth/unknown',
      message: 'An unknown error occurred',
    }
  );
}
