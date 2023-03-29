import { useCallback } from 'react';
import EnumModel from '../../../model/EnumModel';
import { Status } from '../../../model/Status';
import useLiveCollection from '../../hook/useLiveCollection';
import { statusColors } from '../../type/colors';
import Loader from '../loader/Loader';
import StatsCard from './StatsCard';

export default function StatsContainer() {
  const { data: statusData, status } = useLiveCollection<EnumModel>('status');

  const getStatusBySlug = useCallback(
    (slug: Status) => statusData?.find(status => status.slug === slug),
    [statusData]
  );

  if (status === 'loading') return <Loader />;

  const pending = getStatusBySlug('interview');
  const applied = getStatusBySlug('applied');
  const interview = getStatusBySlug('declined');

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {applied ? (
        <StatsCard statusId={applied.id} color={statusColors.applied} />
      ) : (
        <div></div>
      )}

      {pending ? (
        <StatsCard statusId={pending.id} color={statusColors.interview} />
      ) : (
        <div></div>
      )}

      {interview ? (
        <StatsCard statusId={interview.id} color={statusColors.declined} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
