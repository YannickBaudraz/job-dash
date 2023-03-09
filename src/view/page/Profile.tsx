import { Typography } from '@material-tailwind/react';
import withPageTitle from '../../common/component/hoc/withPageTitle';

function Profile() {
  return (
    <>
      <Typography variant="h1">Profile page</Typography>
    </>
  );
}

export default withPageTitle(Profile);
