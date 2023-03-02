import { Button } from '@material-tailwind/react';

export default function AlreadyHaveAccountLink() {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-gray-600">Already have an account?</span>
      <Button color="purple" variant="text" size="sm">
        Log in
      </Button>
    </div>
  );
}
