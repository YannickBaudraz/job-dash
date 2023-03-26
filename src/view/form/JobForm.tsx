import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useCallback } from 'react';
import { useController, useForm } from 'react-hook-form';
import FirestoreSelect from '../../common/component/form/input/FirestoreSelect';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import ThemedTextArea from '../../common/component/form/input/ThemedTextArea';
import useAddJob from '../../common/hook/useAddJob';
import useUpdateJob from '../../common/hook/useUpdateJob';
import { Job } from '../../model/Job';

export type JobFormInputs = Omit<
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
  } = useForm<JobFormInputs>();

  //region Inputs
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

  //region Submit
  const addJob = useAddJob();
  const updateJob = useUpdateJob();

  const submit = useCallback(
    async (data: JobFormInputs) => {
      !job ? await addJob(data) : await updateJob({ ...data, id: job.id });
    },
    [job, addJob, updateJob]
  );
  //endregion

  return (
    <form onSubmit={handleSubmit(submit)} className="mt-6 md:mt-8">
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
