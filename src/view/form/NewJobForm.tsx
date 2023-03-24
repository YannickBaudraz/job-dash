import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useCallback, useEffect, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import ThemedSelect from '../../common/component/form/input/ThemedSelect';
import ThemedTextArea from '../../common/component/form/input/ThemedTextArea';
import { Job } from '../../model/Job';
import JobApplicationType from '../../model/JobApplicationType';
import JobGoal from '../../model/JobGoal';
import JobStatus from '../../model/JobStatus';

type Inputs = Omit<Job, 'id'>;

export default function NewJobForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm<Inputs>();
  const goal = useController({ name: 'goal', control });
  const status = useController({ name: 'status', control });
  const applicationType = useController({ name: 'applicationType', control });

  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    if (isCleared) {
      setIsCleared(false);
    }
  }, [isCleared]);

  const onSubmit = useCallback((data: Inputs) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          variant="gradient"
          color="deep-purple"
          className="mb-4 grid place-items-center py-6"
        >
          <Typography variant="h2">Add job</Typography>
        </CardHeader>

        <CardBody className="grid gap-6 lg:grid-cols-4">
          <ThemedInput
            {...register('position', { required: 'Email is required' })}
            error={errors.position}
          />

          <ThemedInput
            {...register('company', { required: 'Company is required' })}
            error={errors.company}
          />

          <ThemedInput
            {...register('location', { required: 'Location is required' })}
            error={errors.location}
          />

          <ThemedInput {...register('address')} error={errors.address} />

          <ThemedSelect
            {...goal.field}
            options={Object.values(JobGoal)}
            error={errors.goal}
          />

          <ThemedSelect
            {...status.field}
            options={Object.values(JobStatus)}
            error={errors.status}
          />

          <ThemedSelect
            {...applicationType.field}
            options={Object.values(JobApplicationType)}
            error={errors.applicationType}
          />

          <ThemedInput {...register('website')} error={errors.website} />

          <ThemedInput {...register('email')} error={errors.email} />

          <ThemedInput
            {...register('submissionDate')}
            error={errors.submissionDate}
            type="date"
          />

          <ThemedTextArea
            {...register('notes')}
            error={errors.notes}
            containerClassName="lg:col-span-2"
          />
        </CardBody>

        <CardFooter className="mx-auto flex gap-4 lg:w-1/2">
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
