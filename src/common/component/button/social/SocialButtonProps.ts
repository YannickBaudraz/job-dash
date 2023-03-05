import { ButtonProps } from '@material-tailwind/react';

type SocialButtonProps = Pick<ButtonProps, 'size' | 'fullWidth' | 'onClick'> & {
  text: string;
};
export default SocialButtonProps;
