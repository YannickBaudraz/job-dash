import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { updateEmail, updateProfile } from 'firebase/auth';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'reactfire';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import Loader from '../../common/component/loader/Loader';
import useDocument from '../../common/hook/usedocument';
import useUpsertFirestoreUser from '../../common/hook/useUpsertFirestoreUser';
import User from '../../model/User';
import route from '../../routing/route';

export type EditProfileFormInputs = Omit<User, 'id'>;

export function EditProfileForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EditProfileFormInputs>();

  const { data: authUser, status: useUserStatus } = useUser();
  const { data: firestoreUser, status: useDocumentStatus } = useDocument<User>(
    'users',
    authUser?.uid || ''
  );
  const user: User = {
    ...authUser,
    ...firestoreUser,
    name: authUser?.displayName,
  };

  const navigate = useNavigate();
  const updateFirestoreUser = useUpsertFirestoreUser();
  const submit = useCallback(
    async (data: EditProfileFormInputs) => {
      if (!authUser) return;

      await updateEmail(authUser, data.email);
      await updateProfile(authUser, {
        displayName: data.name,
      });
      await updateFirestoreUser(data, authUser.uid);

      navigate(route('profile'));
    },
    [user]
  );

  if (useUserStatus === 'loading' || useDocumentStatus === 'loading')
    return <Loader />;

  if (!user) return <Typography variant="lead">Not logged in</Typography>;

  return (
    <form onSubmit={handleSubmit(submit)} className="mt-6 md:mt-8">
      <Card>
        <CardHeader
          color="deep-purple"
          variant="gradient"
          className="mb-4 grid place-items-center py-6"
        >
          <Typography variant="h2">Edit profile</Typography>
        </CardHeader>

        <CardBody className="grid grid-flow-dense gap-6 md:grid-cols-3">
          <ThemedInput
            {...register('name', {
              required: 'Name is required',
              value: user.name,
            })}
            error={errors.name}
          />

          <ThemedInput
            {...register('email', {
              required: 'Email is required',
              value: user.email,
            })}
            error={errors.email}
          />

          <ThemedInput
            {...register('location', {
              required: 'Location is required',
              value: user.location,
            })}
            error={errors.location}
          />
        </CardBody>

        <CardFooter className="grid grid-flow-dense gap-6 md:grid-cols-3">
          <Button
            size="lg"
            color="deep-purple"
            fullWidth
            type="submit"
            className="col-start-2"
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
