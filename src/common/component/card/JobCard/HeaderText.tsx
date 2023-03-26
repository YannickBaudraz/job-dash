import { Typography } from '@material-tailwind/react';
import { Job } from '../../../../model/Job';
import TargetIcon from '../../media/TargetIcon';

export default function HeaderText({ job }: { job: Job }) {
  return (
    <div>
      <Typography variant="lead" as="h2" className="font-medium">
        {job.company}
      </Typography>

      <div className="flex items-center gap-1">
        <TargetIcon className="h-5 w-5 text-blue-gray-500" />
        <Typography className="flex font-normal">{job.position}</Typography>
      </div>
    </div>
  );
}
