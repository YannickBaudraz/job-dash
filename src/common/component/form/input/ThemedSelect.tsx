import { Option, Select } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import InputErrorMessage from './InputErrorMessage';

type Ref = HTMLInputElement;
type Props = Omit<
  ComponentProps<typeof Select>,
  'color' | 'label' | 'aria-invalid' | 'error' | 'name' | 'children'
> & {
  options: string[];
  name: string;
  error?: FieldError;
  containerClassName?: string;
};

const ThemedSelect = forwardRef<Ref, Props>((props, ref) => {
  const { error, containerClassName, ...rest } = props;

  const label = (
    props.name.charAt(0).toUpperCase() + props.name.slice(1)
  ).replace(/([A-Z])/g, ' $1');

  return (
    <div className={containerClassName}>
      <Select
        ref={ref}
        label={label}
        aria-invalid={error ? 'true' : 'false'}
        error={!!error}
        color="deep-purple"
        {...rest}
      >
        {['', ...props.options].map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <InputErrorMessage error={error} />
    </div>
  );
});

ThemedSelect.displayName = 'ThemedSelect';

export default ThemedSelect;
