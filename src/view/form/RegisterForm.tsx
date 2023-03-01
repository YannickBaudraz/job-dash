import { Button } from '@material-tailwind/react';
import { ThemedInput } from '../../common/components/form/ThemedInput';
import { AuthFormTemplate } from '../template/AuthFormTemplate';

export default function RegisterForm() {
  const inputs = (
    <>
      <ThemedInput label="Email" type="email" />
      <ThemedInput label="Password" type="password" />
    </>
  );

  const submitButton = (
    <Button size="lg" color="deep-purple" fullWidth>
      Register
    </Button>
  );

  const secondaryActions = (
    <>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center justify-center gap-3"
        fullWidth
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google logo"
          className="h-5 w-5"
        />
        Sign in with Google
      </Button>
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-600">Already have an account?</span>
        <Button color="purple" variant="text" size="sm">
          Log in
        </Button>
      </div>
    </>
  );

  return (
    <AuthFormTemplate
      inputs={inputs}
      mainAction={submitButton}
      secondaryActions={secondaryActions}
    />
  );
}
