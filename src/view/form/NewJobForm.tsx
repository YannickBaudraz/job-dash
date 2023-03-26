import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { addDoc, collection } from 'firebase/firestore';
import { useCallback } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFirestore, useUser } from 'reactfire';
import FirestoreSelect from '../../common/component/form/input/FirestoreSelect';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import ThemedTextArea from '../../common/component/form/input/ThemedTextArea';
import FirestoreModelConverter from '../../common/converter/FirestoreModelConverter';
import modelConverter from '../../common/converter/ModelConverter';
import { cleanBeforeSentToFirestore } from '../../common/firebase/firebaseUtils';
import { CreateJob, Job } from '../../model/Job';
import { route } from '../../routing/routes';

export type AddJobInputs = Omit<
  Job,
  'id' | 'goal' | 'statusId' | 'contactTypeId' | 'submissionDate'
> & {
  goal: string;
  status: string;
  contactType: string;
  submissionDate?: string;
};

export default function NewJobForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm<AddJobInputs>();
  const position = register('position', { required: 'Email is required' });
  const company = register('company', { required: 'Company is required' });
  const location = register('location', { required: 'Location is required' });
  const address = register('address', { required: 'Address is required' });
  const goal = useController({
    name: 'goal',
    control,
    rules: { required: 'Goal is required' },
  });
  const status = useController({
    name: 'status',
    control,
    rules: { required: 'Status is required' },
  });
  const types = useController({
    name: 'contactType',
    control,
    rules: { required: 'Application type is required' },
  });
  const website = register('website');
  const email = register('email');
  const submissionDate = register('submissionDate');
  const notes = register('notes');

  const firestore = useFirestore();
  const { data: user } = useUser();
  const navigate = useNavigate();
  const addJob = useCallback(async (data: AddJobInputs) => {
    if (!user) throw new Error('User is not logged in');

    const job = modelConverter.fromAddJobInputsToJob(data, user.uid);
    const cleanedData = cleanBeforeSentToFirestore(job);

    const jobsCollection = collection(firestore, 'jobs').withConverter(
      new FirestoreModelConverter<CreateJob>().converter
    );

    await addDoc(jobsCollection, cleanedData);

    navigate(route('jobs'));
  }, []);

  return (
    <form onSubmit={handleSubmit(addJob)}>
      <Card>
        <CardHeader
          variant="gradient"
          color="deep-purple"
          className="mb-4 grid place-items-center py-6"
        >
          <Typography variant="h2">Add job</Typography>
        </CardHeader>
        <CardBody className="grid grid-flow-dense gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <ThemedInput {...position} error={errors.position} />

          <ThemedInput {...company} error={errors.company} />

          <ThemedInput {...location} error={errors.location} />

          <ThemedInput {...address} error={errors.address} />

          <FirestoreSelect
            collection="goals"
            {...goal.field}
            error={errors.goal}
          />

          <FirestoreSelect
            collection="status"
            {...status.field}
            error={errors.status}
          />

          <FirestoreSelect
            collection="application_types"
            {...types.field}
            error={errors.contactType}
          />

          <ThemedInput {...website} type="url" />

          <ThemedInput {...email} />

          <ThemedInput {...submissionDate} type="date" />

          <ThemedTextArea {...notes} containerClassName="md:col-span-2" />
        </CardBody>

        <CardFooter className="mx-auto flex w-full flex-col gap-4 lg:w-1/2 lg:flex-row">
          <Button
            type="reset"
            variant="outlined"
            color="deep-purple"
            fullWidth
            onClick={() => reset()}
          >
            Clear
          </Button>

          <Button type="submit" color="deep-purple" fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
