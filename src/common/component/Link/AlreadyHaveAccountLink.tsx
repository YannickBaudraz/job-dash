import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { route } from '../../../routing/routes';

export default function AlreadyHaveAccountLink() {
  return (
    <Link
      to={route('login')}
      className="flex items-center justify-center gap-2"
    >
      <span className="text-gray-600">Already have an account?</span>
      <Button color="purple" variant="text" size="sm">
        Log in
      </Button>
    </Link>
  );
}
