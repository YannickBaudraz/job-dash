import { AuthTitle } from '../../common/components/typography/AuthTitle';
import RegisterForm from '../form/RegisterForm';

export default function Register() {
  return (
    <section>
      <AuthTitle
        title="Register"
        subtitle="Create a new account"
        className="mb-6"
      />
      <RegisterForm />
    </section>
  );
}
