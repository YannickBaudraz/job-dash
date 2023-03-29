import { Card, CardBody, Typography } from '@material-tailwind/react';
import { color } from '@material-tailwind/react/types/components/alert';
import { where } from 'firebase/firestore';
import EnumModel from '../../../model/EnumModel';
import { Job } from '../../../model/Job';
import useDocument from '../../hook/usedocument';
import useLiveCollection from '../../hook/useLiveCollection';

type Props = {
  statusId: string;
  color: color;
};

export default function StatsCard({ statusId, color }: Props) {
  const { data: status } = useDocument<EnumModel>('status', statusId);
  const { data: jobs } = useLiveCollection<Job>(
    'jobs',
    where('status_id', '==', statusId)
  );

  return (
    <Card color={color} className={`h-full justify-between`}>
      <CardBody className="flex flex-col justify-center gap-4 pl-8">
        <Typography variant="h1" as="p">
          {jobs?.length || 0}
        </Typography>

        <Typography variant="h5" as="p" className="font-medium">
          {status?.name}
        </Typography>
      </CardBody>
    </Card>
  );
}
