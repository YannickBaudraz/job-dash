import { BaseSyntheticEvent } from 'react';

type Props = {
  onSubmit: (e?: BaseSyntheticEvent) => void;
  inputs: JSX.Element;
  mainAction: JSX.Element;
  secondaryActions?: JSX.Element;
};

export function AuthForm({
  onSubmit,
  inputs,
  mainAction,
  secondaryActions,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex max-w-md flex-col gap-4 px-6"
    >
      {inputs}
      {mainAction}
      <div>
        <div className="flex items-center justify-center gap-2">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-600">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
      </div>
      {secondaryActions}
    </form>
  );
}
