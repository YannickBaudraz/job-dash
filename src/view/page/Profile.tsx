import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { useUser } from 'reactfire';
import withPageTitle from '../../common/component/hoc/withPageTitle';
import Loader from '../../common/component/loader/Loader';
import useDocument from '../../common/hook/usedocument';
import User from '../../model/User';

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
            <Typography variant="h4" color="blue-gray" className="mb-2">
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
          <Typography variant="h3" color="blue-gray" className="mb-2">
            {firebaseAuthUser.displayName}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {firebaseAuthUser.email}
          </Typography>
          {user?.location && (
            <Typography color="blue-gray" className="mb-4">
              {user.location}
            </Typography>
          )}
        </CardBody>
        <CardFooter>
          <Button color="teal" variant="filled" size="md" className="w-full">
            Edit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

Profile.displayName = 'Profile';

export default withPageTitle(Profile);
