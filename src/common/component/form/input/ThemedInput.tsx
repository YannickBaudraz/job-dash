import { Input } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import InputErrorMessage from './InputErrorMessage';

type Ref = HTMLInputElement;
type Props = Omit<
  ComponentProps<typeof Input>,
  'color' | 'label' | 'aria-invalid' | 'error'
> & {
  error?: FieldError;
  containerClassName?: string;
};

const ThemedInput = forwardRef<Ref, Props>((props, ref) => {
  const { error, containerClassName, ...rest } = props;

  const label = props.name
    ? props.name.charAt(0).toUpperCase() + props.name.slice(1)
    : props.type;
  const type = props.type ?? props.name ?? 'text';

  return (
    <div className={containerClassName}>
      <Input
        ref={ref}
        label={label}
        type={type}
        aria-invalid={error ? 'true' : 'false'}
        error={!!error}
        color="deep-purple"
        {...rest}
      />
      <InputErrorMessage error={error} />
    </div>
  );
});

ThemedInput.displayName = 'ThemedInput';

export default ThemedInput;
