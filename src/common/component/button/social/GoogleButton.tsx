import { Button } from '@material-tailwind/react';
import googleBrand from '../../../../assets/images/brand/google-brand.png';
import SocialButtonProps from './SocialButtonProps';

export default function GoogleButton(props: SocialButtonProps) {
  return (
    <Button
      size={props.size ?? 'lg'}
      variant="outlined"
      color="white"
      className="flex items-center justify-center gap-3 border-2 border-black text-black"
      fullWidth={props.fullWidth}
    >
      <img src={googleBrand} alt="Google logo" className="h-5 w-5" />
      {props.action} with Google
    </Button>
  );
}
