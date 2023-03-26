import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import route from '../../../routing/route';

export default function NoAccountLink() {
  return (
    <Link
      to={route('register')}
      className="flex items-center justify-center gap-2"
    >
      <span className="text-gray-600">Don&apos;t have an account?</span>
      <Button color="purple" variant="text" size="sm">
        Register
      </Button>
    </Link>
  );
}
