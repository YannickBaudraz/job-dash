import { Typography } from '@material-tailwind/react';
import { FieldError, FieldErrors } from 'react-hook-form';

type Props = {
  onSubmit: JSX.IntrinsicElements['form']['onSubmit'];
  inputs: JSX.Element;
  mainAction: JSX.Element;
  secondaryActions?: JSX.Element;
  rootError?: FieldError | FieldErrors['root'];
};

export function AuthForm({
  onSubmit,
  inputs,
  mainAction,
  secondaryActions,
  rootError,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex max-w-md flex-col gap-4 px-6"
    >
      {rootError && <Typography color="red">{rootError.message}</Typography>}
      {inputs}
      {mainAction}
      <Separator />
      {secondaryActions}
    </form>
  );
}

function Separator() {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <hr className="w-full border-gray-300" />
        <Typography color="gray" variant="paragraph">
          OR
        </Typography>
        <hr className="w-full border-gray-300" />
      </div>
    </div>
  );
}
