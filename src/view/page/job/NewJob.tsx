import withPageTitle from '../../../common/component/hoc/withPageTitle';
import NewJobForm from '../../form/NewJobForm';

function NewJob() {
  return (
    <div className="mt-10">
      <NewJobForm />
    </div>
  );
}

NewJob.displayName = 'NewJob';

export default withPageTitle(NewJob);
