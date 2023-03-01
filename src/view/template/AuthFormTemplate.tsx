type FormTemplateProps = {
  inputs: JSX.Element;
  mainAction: JSX.Element;
  secondaryActions?: JSX.Element;
};

export function AuthFormTemplate({
  inputs,
  mainAction,
  secondaryActions,
}: FormTemplateProps) {
  return (
    <form className="mx-auto flex max-w-md flex-col gap-4 px-6">
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
