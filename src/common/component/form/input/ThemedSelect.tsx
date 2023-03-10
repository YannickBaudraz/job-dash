import { Select, Typography } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type Ref = HTMLInputElement;
type Props = Omit<
  ComponentProps<typeof Select>,
  'color' | 'label' | 'aria-invalid' | 'error' | 'name'
> & {
  name: string;
  error?: FieldError;
  containerClassName?: string;
};

const ThemedSelect = forwardRef<Ref, Props>(({ error, ...props }, ref) => {
  const label = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <div className={props.containerClassName}>
      <Select
        ref={ref}
        label={label}
        aria-invalid={error ? 'true' : 'false'}
        error={!!error}
        color="deep-purple"
        {...props}
      >
        {props.children}
      </Select>
      {error && <Typography color="red">{error.message}</Typography>}
    </div>
  );
});

ThemedSelect.displayName = 'ThemedSelect';

export default ThemedSelect;
