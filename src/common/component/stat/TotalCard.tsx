import { Card, CardBody, Typography } from '@material-tailwind/react';
import useUserJobs from '../../hook/useUserJobs';

export default function TotalCard() {
  const { jobs } = useUserJobs();

  if (!jobs) return null;

  return (
    <article>
      <Card variant="gradient" color="deep-purple">
        <CardBody className="flex flex-col lg:gap-4 lg:pl-8">
          <Typography variant="h1" as="p">
            {jobs.length}
          </Typography>

          <Typography variant="h5" as="p" className="font-medium">
            {'Total'}
          </Typography>
        </CardBody>
      </Card>
    </article>
  );
}
