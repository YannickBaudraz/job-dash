import {
  BriefcaseIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/solid';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from '@material-tailwind/react';
import { Job } from '../../../model/Job';
import TargetIcon from '../media/TargetIcon';

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <article>
      <Card className="h-full justify-between">
        <CardHeader
          floated={false}
          shadow={false}
          className="mb-2 rounded-lg py-2 pl-4"
        >
          <div className="flex items-center">
            <TextIcon companyFirstLetter={job.company[0]} />
            <HeaderText job={job} />
          </div>
        </CardHeader>

        <hr className="border-deep-purple-100" />

        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AddressItem job={job} />
          <GoalItem />
          <SubmissionDateItem date={job.submissionDate} />
        </CardBody>

        <CardFooter className="flex items-center justify-between">
          <StatusItem />
          <div className="flex gap-2">
            <Button color="teal">Edit</Button>
            <Button color="pink">Delete</Button>
          </div>
        </CardFooter>
      </Card>
    </article>
  );
}

function TextIcon(props: { companyFirstLetter: string }) {
  return (
    <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-md bg-deep-purple-400 text-white">
      <Typography variant="h3" as="span">
        {props.companyFirstLetter}
      </Typography>
    </div>
  );
}

function HeaderText({ job }: { job: Job }) {
  return (
    <div>
      <Typography variant="lead" as="h2" className="font-medium">
        {job.company}
      </Typography>

      <div className="flex items-center gap-1">
        <TargetIcon className="h-4 w-4 text-blue-gray-500" />
        <Typography variant="small" className="flex font-normal">
          {job.position}
        </Typography>
      </div>
    </div>
  );
}

function AddressItem({ job }: { job: Job }) {
  return (
    <Typography variant="small" className="flex items-center gap-2 font-normal">
      <MapPinIcon className="h-4 w-4 -translate-y-[0.1rem] text-blue-gray-500" />
      {job.location}, {job.address}
    </Typography>
  );
}

function GoalItem() {
  return (
    <Typography variant="small" className="flex items-center gap-2 font-normal">
      <BriefcaseIcon className="h-4 w-4 text-blue-gray-500" />
      Full Time
    </Typography>
  );
}

function StatusItem() {
  return (
    <div className="flex items-center gap-2">
      <Chip
        value="Contact Initialed"
        className="w-34 flex h-fit items-center rounded-none bg-indigo-50 text-indigo-500"
      />
    </div>
  );
}

function SubmissionDateItem({ date }: { date?: Date }) {
  if (!date) return <div></div>;

  return (
    <Typography variant="small" className="flex items-center gap-2 font-normal">
      <PaperAirplaneIcon className="h-4 w-4 -translate-y-[0.1rem] -rotate-45 text-blue-gray-500" />
      {date.toDateString()}
    </Typography>
  );
}
