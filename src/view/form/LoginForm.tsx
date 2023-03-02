import { Button } from '@material-tailwind/react';
import { ThemedInput } from '../../common/component/form/ThemedInput';
import { AuthFormTemplate } from '../template/AuthFormTemplate';

export default function LoginForm() {
  const inputs = (
    <>
      <ThemedInput label="Email" type="email" name="email" />
      <ThemedInput label="Password" type="password" name="password" />
    </>
  );

  const submitButton = (
    <Button size="lg" color="deep-purple" fullWidth>
      Log in
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
        Log in with Google
      </Button>
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-600">Don&apos;t have an account?</span>
        <Button color="purple" variant="text" size="sm">
          Register
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
