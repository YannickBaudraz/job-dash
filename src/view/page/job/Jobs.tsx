import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../../common/component/hoc/withPageTitle';
import useUserJobs from '../../../common/hook/useUserJobs';

function Jobs() {
  const jobs = useUserJobs();
  console.log(jobs);

  return (
    <>
      <Typography variant="h1">All Jobs page</Typography>
    </>
  );
}

Jobs.displayName = 'Jobs';

export default withPageTitle(Jobs);
