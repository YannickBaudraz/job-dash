import { Chip } from '@material-tailwind/react';
import { colors } from '@material-tailwind/react/types/generic';
import EnumModel from '../../../../model/EnumModel';
import useDocument from '../../../hook/usedocument';

const statusColors: Record<string, colors> = {
  draft: 'blue-gray',
  contact_initialed: 'purple',
  pending: 'orange',
  interview: 'brown',
  applied: 'indigo',
  accepted: 'green',
  declined: 'red',
};

export default function StatusItem({ statusId }: { statusId: string }) {
  const { data: status } = useDocument<EnumModel>('status', statusId);

  if (!status) return <>&nbsp;</>;

  const color = statusColors[status?.slug ?? 'draft'];

  return (
    <div className="flex items-center gap-2">
      <Chip
        value={status.name}
        className={`rounded-none bg-${color}-50 text-${color}-900`}
      />
    </div>
  );
}
