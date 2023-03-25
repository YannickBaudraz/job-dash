import { Option, Select } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import EnumModel from '../../../../model/EnumModel';
import InputErrorMessage from './InputErrorMessage';

type Ref = HTMLInputElement;
type Props = Omit<
  ComponentProps<typeof Select>,
  'color' | 'label' | 'aria-invalid' | 'error' | 'name' | 'children'
> & {
  options: EnumModel[];
  name: string;
  error?: FieldError;
  containerClassName?: string;
};

const undefinedOption: EnumModel = {
  id: '',
  name: '',
  slug: '',
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
        onChange={e => props.onChange?.(e !== '' ? e : undefined)}
        selected={(e, i) => {
          addOptionValueToSpan();
          return props.selected?.(e, i);
        }}
      >
        {[undefinedOption, ...props.options].map(option => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
      <InputErrorMessage error={error} />
    </div>
  );

  function addOptionValueToSpan() {
    const span = document.querySelector(`button[name="${props.name}"] span`);
    if (span) {
      const { options, value } = props;
      span.textContent = options.find(o => o.id === value)?.name || '';
    }
  }
});

ThemedSelect.displayName = 'ThemedSelect';

export default ThemedSelect;
