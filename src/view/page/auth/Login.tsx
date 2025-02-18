import { AuthTitle } from '../../../common/component/typography/AuthTitle';
import LoginForm from '../../form/LoginForm';

export default function Login() {
  return (
    <section>
      <AuthTitle title="Login" subtitle="Welcome back" className="mb-6" />
      <LoginForm />
    </section>
  );
}
