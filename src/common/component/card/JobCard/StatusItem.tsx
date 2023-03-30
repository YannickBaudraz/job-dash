import { Chip } from '@material-tailwind/react';
import EnumModel from '../../../../model/EnumModel';
import { Status } from '../../../../model/Status';
import useDocument from '../../../hook/usedocument';
import { statusColors } from '../../../type/colors';

export default function StatusItem({ statusId }: { statusId: string }) {
  const { data: status } = useDocument<EnumModel>('status', statusId);

  if (!status) return <>&nbsp;</>;

  const color = statusColors[(status?.slug as Status) ?? 'pending'];

  return (
    <div className="flex items-center gap-2">
      <Chip
        value={status.name}
        className={`rounded-none bg-${color}-50 text-${color}-900`}
      />
    </div>
  );
}
