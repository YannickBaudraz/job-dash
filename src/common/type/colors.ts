import { colors } from '@material-tailwind/react/types/generic';
import { Status } from '../../model/Status';

export const statusColors: Record<Status, colors> = {
  draft: 'blue-gray',
  contact_initialed: 'purple',
  pending: 'amber',
  interview: 'brown',
  applied: 'indigo',
  accepted: 'green',
  declined: 'red',
};
