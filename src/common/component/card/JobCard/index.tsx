import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@material-tailwind/react';
import { Job } from '../../../../model/Job';
import useDestroyDocument from '../../../hook/useDestroyDocument';
import AddressItem from './AddressItem';
import GoalItem from './GoalItem';
import HeaderText from './HeaderText';
import StatusItem from './StatusItem';
import SubmissionDateItem from './SubmissionDateItem';
import TextIcon from './TextIcon';

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  const destroy = useDestroyDocument('jobs', job.id);

  return (
    <article>
      <Card className="h-full justify-between">
        <CardHeader
          floated={false}
          shadow={false}
          className="mb-2 flex items-center rounded-lg py-2 pl-4"
        >
          <TextIcon companyFirstLetter={job.company[0]} />
          <HeaderText job={job} />
        </CardHeader>

        <hr className="border-deep-purple-100" />

        <CardBody className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AddressItem job={job} />
          <GoalItem goalId={job.goalId} />
          <SubmissionDateItem date={job.submissionDate} />
        </CardBody>

        <CardFooter className="flex items-center justify-between">
          <StatusItem statusId={job.statusId} />

          <section className="flex gap-2">
            <Button color="teal">Edit</Button>
            <Button color="pink" onClick={destroy}>
              Delete
            </Button>
          </section>
        </CardFooter>
      </Card>
    </article>
  );
}
