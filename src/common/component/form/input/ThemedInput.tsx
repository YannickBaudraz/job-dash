import { Input, Typography } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type Ref = HTMLInputElement;
type Props = Omit<
  ComponentProps<typeof Input>,
  'color' | 'label' | 'aria-invalid' | 'error'
> & {
  error?: FieldError;
};

const ThemedInput = forwardRef<Ref, Props>(({ error, ...props }, ref) => {
  const label = props.name
    ? props.name.charAt(0).toUpperCase() + props.name.slice(1)
    : props.type;
  const type = props.type ?? props.name ?? 'text';

  return (
    <div>
      <Input
        ref={ref}
        label={label}
        type={type}
        aria-invalid={error ? 'true' : 'false'}
        error={!!error}
        color="deep-purple"
        {...props}
      />
      {error && <Typography color="red">{error.message}</Typography>}
    </div>
  );
});

ThemedInput.displayName = 'ThemedInput';

export default ThemedInput;
