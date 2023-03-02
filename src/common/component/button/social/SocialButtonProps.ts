import { ButtonProps } from '@material-tailwind/react';

type SocialButtonProps = Pick<ButtonProps, 'size' | 'fullWidth'> & {
  action: string;
};
export default SocialButtonProps;
