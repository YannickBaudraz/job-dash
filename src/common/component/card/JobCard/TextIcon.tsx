import { Typography } from '@material-tailwind/react';

export default function TextIcon(props: { companyFirstLetter: string }) {
  return (
    <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-md bg-deep-purple-400 text-white">
      <Typography variant="h3" as="span">
        {props.companyFirstLetter}
      </Typography>
    </div>
  );
}
