import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import EnumModel from '../../../../model/EnumModel';
import useDocument from '../../../hook/usedocument';

export default function GoalItem({ goalId }: { goalId: string }) {
  const { data: goal } = useDocument<EnumModel>('goals', goalId);

  return goal ? (
    <Typography className="flex items-center gap-2 font-normal">
      <BriefcaseIcon className="h-5 w-5 text-blue-gray-500" />
      {goal.name}
    </Typography>
  ) : (
    <>&nbsp;</>
  );
}
