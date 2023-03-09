import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../../common/component/hoc/withPageTitle';

function NewJob() {
  return (
    <>
      <Typography variant="h1">Create Job page</Typography>
    </>
  );
}

NewJob.displayName = 'NewJob';

export default withPageTitle(NewJob);
