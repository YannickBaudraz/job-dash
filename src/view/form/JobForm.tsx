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
import route from '../../routing/route';

export type AddJobInputs = Omit<
  Job,
  'id' | 'goal' | 'statusId' | 'contactTypeId' | 'submissionDate'
> & {
  goal: string;
  status: string;
  contactType: string;
  submissionDate?: string;
};

type JobFormProps = {
  job?: Job;
};

export default function JobForm({ job }: JobFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm<AddJobInputs>();

  //region Get inputs
  const position = register('position', {
    required: 'Email is required',
    value: job?.position,
  });
  const company = register('company', {
    required: 'Company is required',
    value: job?.company,
  });
  const location = register('location', {
    required: 'Location is required',
    value: job?.location,
  });
  const address = register('address', {
    required: 'Address is required',
    value: job?.address,
  });
  const goal = useController({
    name: 'goal',
    control,
    rules: { required: 'Goal is required' },
    defaultValue: job?.goalId,
  });
  const status = useController({
    name: 'status',
    control,
    rules: { required: 'Status is required' },
    defaultValue: job?.statusId,
  });
  const types = useController({
    name: 'contactType',
    control,
    rules: { required: 'Application type is required' },
    defaultValue: job?.contactTypeId,
  });
  const website = register('website', { value: job?.website });
  const email = register('email', { value: job?.email });
  const submissionDate = register('submissionDate', {
    value: job?.submissionDate?.toISOString().split('T')[0],
  });
  const notes = register('notes', { value: job?.notes });
  //endregion

  //region Add job
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
  //endregion

  return (
    <form onSubmit={handleSubmit(addJob)} className="mt-6 md:mt-8">
      <Card>
        <CardHeader
          variant="gradient"
          color="deep-purple"
          className="mb-4 grid place-items-center py-6"
        >
          <Typography variant="h2">{job ? 'Edit job' : 'Add job'}</Typography>
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
            collection="contact_types"
            {...types.field}
            error={errors.contactType}
          />

          <ThemedInput {...website} />

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
