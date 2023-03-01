import { Input } from '@material-tailwind/react';
import { ComponentProps } from 'react';

type ThemedInputProps = Omit<ComponentProps<typeof Input>, 'color'>;

export function ThemedInput(props: ThemedInputProps) {
  return <Input color="deep-purple" {...props} />;
}
