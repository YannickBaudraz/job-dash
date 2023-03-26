import { useParams } from 'react-router-dom';
import withPageTitle from '../../../common/component/hoc/withPageTitle';
import Loader from '../../../common/component/loader/Loader';
import useDocument from '../../../common/hook/usedocument';
import { Job } from '../../../model/Job';
import JobForm from '../../form/JobForm';

function EditJob() {
  const { id } = useParams<{ id: string }>();

  const { data: job, status } = useDocument<Job>('jobs', id ?? '');

  return status === 'success' ? <JobForm job={job} /> : <Loader />;
}

EditJob.displayName = 'EditJob';

export default withPageTitle(EditJob);
