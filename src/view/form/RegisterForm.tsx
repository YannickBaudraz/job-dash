import { Button } from '@material-tailwind/react';
import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import { ThemedInput } from '../../common/component/form/ThemedInput';
import AlreadyHaveAccountLink from '../../common/component/Link/AlreadyHaveAccountLink';
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
      <GoogleButton action="Register" />
      <GithubButton action="Register" />
      <AlreadyHaveAccountLink />
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
