import { Button } from '@material-tailwind/react';

import GithubButton from '../../common/component/button/social/GithubButton';
import GoogleButton from '../../common/component/button/social/GoogleButton';
import ThemedInput from '../../common/component/form/ThemedInput';
import NoAccountLink from '../../common/component/Link/NoAccountLink';
import { AuthForm } from '../template/AuthForm';

export default function LoginForm() {
  return (
    <AuthForm
      onSubmit={() => console.log('submit')}
      inputs={
        <>
          <ThemedInput label="Email" type="email" name="email" />
          <ThemedInput label="Password" type="password" name="password" />
        </>
      }
      mainAction={
        <Button size="lg" color="deep-purple" fullWidth>
          Log in
        </Button>
      }
      secondaryActions={
        <>
          <GoogleButton action="Log in" />
          <GithubButton action="Log in" />
          <NoAccountLink />
        </>
      }
    />
  );
}
