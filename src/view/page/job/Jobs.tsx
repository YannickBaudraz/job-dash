import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../../common/component/hoc/withPageTitle';

function Jobs() {
  return (
    <>
      <Typography variant="h1">All Jobs page</Typography>
    </>
  );
}

export default withPageTitle(Jobs);
