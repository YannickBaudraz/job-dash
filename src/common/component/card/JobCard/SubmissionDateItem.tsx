import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';

export default function SubmissionDateItem({ date }: { date?: Date }) {
  return date ? (
    <Typography className="flex items-center gap-2 font-normal">
      <PaperAirplaneIcon className="h-5 w-5 -translate-y-[0.2rem] -rotate-45 text-blue-gray-500" />
      {date.toDateString()}
    </Typography>
  ) : (
    <>&nbsp;</>
  );
}
