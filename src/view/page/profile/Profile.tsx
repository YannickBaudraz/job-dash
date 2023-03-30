import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useUser } from 'reactfire';
import withPageTitle from '../../../common/component/hoc/withPageTitle';
import Loader from '../../../common/component/loader/Loader';
import useDocument from '../../../common/hook/usedocument';
import User from '../../../model/User';
import route from '../../../routing/route';

function Profile() {
  const { data: firebaseAuthUser, status: useUserStatus } = useUser();

  const { data: user, status: useDocumentStatus } = useDocument<User>(
    'users',
    firebaseAuthUser?.uid || ''
  );

  if (useUserStatus === 'loading' || useDocumentStatus === 'loading')
    return <Loader />;

  if (!firebaseAuthUser)
    return (
      <div className="mx-auto max-w-xl">
        <Card>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2">
              Please login to view your profile (How did you get here?!)
            </Typography>
          </CardBody>
        </Card>
      </div>
    );

  return (
    <div className="mx-auto max-w-xl">
      <Card>
        <CardBody className="text-center">
          {firebaseAuthUser.displayName ? (
            <Typography variant="h3" className="mb-2">
              {firebaseAuthUser.displayName}
            </Typography>
          ) : (
            <Typography variant="lead" className="mb-2">
              Edit your profile in order to set your name
            </Typography>
          )}

          <Typography color="blue" className="font-medium" textGradient>
            {firebaseAuthUser.email}
          </Typography>

          {user?.location ? (
            <Typography className="mb-4">{user.location}</Typography>
          ) : (
            <Typography className="mb-4">
              Edit your profile in order to set your location
            </Typography>
          )}
        </CardBody>

        <CardFooter>
          <Link to={route('profile.edit')}>
            <Button color="teal" variant="filled" size="md" className="w-full">
              Edit
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

Profile.displayName = 'Profile';

export default withPageTitle(Profile);
