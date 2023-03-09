import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../../common/component/hoc/withPageTitle';

function CreateJob() {
  return (
    <>
      <Typography variant="h1">Create Job page</Typography>
    </>
  );
}

export default withPageTitle(CreateJob);
