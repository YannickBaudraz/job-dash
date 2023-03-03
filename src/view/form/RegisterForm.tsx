import { Button } from '@material-tailwind/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import { ThemedInput } from '../../common/component/form/ThemedInput';
import AlreadyHaveAccountLink from '../../common/component/Link/AlreadyHaveAccountLink';
import { InputChangeEvent } from '../../common/react/types';
import { AuthFormTemplate } from '../template/AuthFormTemplate';

export default function RegisterForm() {
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enableSubmit = !!email && !!password;

  function onEmailChange(e: InputChangeEvent) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e: InputChangeEvent) {
    setPassword(e.target.value);
  }

  async function onSubmit() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User created', userCredential);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  return (
    <AuthFormTemplate
      inputs={
        <Inputs
          email={{ value: email, onChange: onEmailChange }}
          password={{ value: password, onChange: onPasswordChange }}
        />
      }
      mainAction={<SubmitButton enable={enableSubmit} onSubmit={onSubmit} />}
      secondaryActions={<SecondaryActions />}
    />
  );
}

type InputsProps = {
  email: {
    value: string;
    onChange: (e: InputChangeEvent) => void;
  };
  password: {
    value: string;
    onChange: (e: InputChangeEvent) => void;
  };
};
function Inputs({ email, password }: InputsProps) {
  return (
    <>
      <ThemedInput
        label="Email"
        type="email"
        value={email.value}
        onChange={email.onChange}
      />
      <ThemedInput
        label="Password"
        type="password"
        value={password.value}
        onChange={password.onChange}
      />
    </>
  );
}

type SubmitButtonProps = {
  enable: boolean;
  onSubmit: () => void;
};
function SubmitButton({ enable, onSubmit }: SubmitButtonProps) {
  return (
    <Button
      size="lg"
      color="deep-purple"
      fullWidth
      disabled={!enable}
      onClick={onSubmit}
    >
      Register
    </Button>
  );
}

function SecondaryActions() {
  return (
    <>
      <GoogleButton action="Register" />
      <GithubButton action="Register" />
      <AlreadyHaveAccountLink />
    </>
  );
}
