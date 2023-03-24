import { Typography } from '@material-tailwind/react';
import { FieldError } from 'react-hook-form';

type Props = {
  error?: FieldError;
};

export default function InputErrorMessage({ error }: Props) {
  if (!error) return null;

  return (
    <Typography variant="small" color="red">
      {error.message}
    </Typography>
  );
}
