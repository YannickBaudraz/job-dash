import withPageTitle from '../../../common/component/hoc/withPageTitle';
import NewJobForm from '../../form/NewJobForm';

function NewJob() {
  return <NewJobForm />;
}

NewJob.displayName = 'NewJob';

export default withPageTitle(NewJob);
