import { Button } from '@material-tailwind/react';
import logo from '../../../../assets/images/brand/github-brand.png';
import SocialButtonProps from './SocialButtonProps';

export default function GithubButton(props: SocialButtonProps) {
  return (
    <Button
      size={props.size ?? 'lg'}
      color="gray"
      className="flex items-center justify-center gap-3 bg-gray-900"
      fullWidth={props.fullWidth}
    >
      <img src={logo} alt="Github logo" className="h-5 w-5" />
      {props.text} with Github
    </Button>
  );
}
