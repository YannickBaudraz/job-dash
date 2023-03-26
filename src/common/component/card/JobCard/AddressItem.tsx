import { MapPinIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import { Job } from '../../../../model/Job';

export default function AddressItem({ job }: { job: Job }) {
  return (
    <Typography className="flex items-center gap-2 font-normal">
      <MapPinIcon className="h-5 w-5 -translate-y-[0.1rem] text-blue-gray-500" />
      {job.location}, {job.address}
    </Typography>
  );
}
