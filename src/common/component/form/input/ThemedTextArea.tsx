import { Textarea } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import InputErrorMessage from './InputErrorMessage';

type Ref = HTMLDivElement;
type Props = Omit<
  ComponentProps<typeof Textarea>,
  'color' | 'aria-invalid' | 'error'
> & {
  error?: FieldError;
  containerClassName?: string;
};

const ThemedTextArea = forwardRef<Ref, Props>((props, ref) => {
  const { error, containerClassName, ...rest } = props;

  const name =
    props.name &&
    (props.name?.charAt(0).toUpperCase() + props.name?.slice(1)).replace(
      /([A-Z])/g,
      ' $1'
    );
  const label = props.label ? props.label : name ?? 'Text';

  return (
    <div className={containerClassName}>
      <Textarea
        ref={ref}
        label={label}
        aria-invalid={error ? 'true' : 'false'}
        error={!!error}
        color="deep-purple"
        {...rest}
      />
      <InputErrorMessage error={error} />
    </div>
  );
});

ThemedTextArea.displayName = 'ThemedTextArea';

export default ThemedTextArea;
