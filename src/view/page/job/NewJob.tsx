import withPageTitle from '../../../common/component/hoc/withPageTitle';
import JobForm from '../../form/JobForm';

function NewJob() {
  return <JobForm />;
}

NewJob.displayName = 'NewJob';

export default withPageTitle(NewJob);
