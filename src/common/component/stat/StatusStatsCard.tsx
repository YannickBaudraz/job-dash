import { Card, CardBody, Typography } from '@material-tailwind/react';
import { color } from '@material-tailwind/react/types/components/alert';
import { where } from 'firebase/firestore';
import EnumModel from '../../../model/EnumModel';
import useDocument from '../../hook/usedocument';
import useUserJobs from '../../hook/useUserJobs';

type Props = {
  statusId: string;
  color: color;
};

export default function StatusStatsCard({ statusId, color }: Props) {
  const { data: status } = useDocument<EnumModel>('status', statusId);
  const { jobs } = useUserJobs(where('status_id', '==', statusId));

  return (
    <article>
      <Card variant="gradient" color={color}>
        <CardBody className="flex flex-col lg:gap-4 lg:pl-8">
          <Typography variant="h1" as="p">
            {jobs?.length || 0}
          </Typography>

          <Typography variant="h5" as="p" className="font-medium">
            {status?.name || ''}
          </Typography>
        </CardBody>
      </Card>
    </article>
  );
}
