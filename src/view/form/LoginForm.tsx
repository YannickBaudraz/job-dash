import { Button } from '@material-tailwind/react';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import { ThemedInput } from '../../common/component/form/ThemedInput';
import NoAccountLink from '../../common/component/Link/NoAccountLink';
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
      <GoogleButton action="Log in" />
      <GithubButton action="Log in" />
      <NoAccountLink />
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
