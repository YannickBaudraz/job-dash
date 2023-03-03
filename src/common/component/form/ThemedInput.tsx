import { Input } from '@material-tailwind/react';
import { ComponentProps, forwardRef } from 'react';

type Ref = HTMLInputElement;
type Props = Omit<ComponentProps<typeof Input>, 'color'>;

const ThemedInput = forwardRef<Ref, Props>((props, ref) => {
  return <Input color="deep-purple" {...props} ref={ref} />;
});

ThemedInput.displayName = 'ThemedInput';

export default ThemedInput;
