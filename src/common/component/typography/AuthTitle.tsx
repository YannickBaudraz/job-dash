import { Typography } from '@material-tailwind/react';

type AuthTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function AuthTitle({ title, subtitle, className }: AuthTitleProps) {
  return (
    <header className={className}>
      <Typography variant="h1" color="blue-gray" className="text-4xl">
        {title}
      </Typography>
      <Typography variant="lead" color="gray">
        {subtitle}
      </Typography>
    </header>
  );
}
