import { QueryConstraint, where } from 'firebase/firestore';
import { useUser } from 'reactfire';
import { Job } from '../../model/Job';
import useLiveCollection from './useLiveCollection';

export default function useUserJobs(...constraints: QueryConstraint[]) {
  const { data: user } = useUser();
  const { data: jobs, status } = useLiveCollection<Job>(
    'jobs',
    where('user_id', '==', user?.uid),
    ...constraints
  );

  return { jobs, status };
}
