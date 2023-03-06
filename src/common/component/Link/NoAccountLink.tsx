import { Button } from '@material-tailwind/react';

export default function NoAccountLink() {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-gray-600">Don&apos;t have an account?</span>
      <Button color="purple" variant="text" size="sm">
        Register
      </Button>
    </div>
  );
}
