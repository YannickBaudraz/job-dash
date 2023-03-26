import withPageTitle from '../../../common/component/hoc/withPageTitle';
import NewJobForm from '../../form/NewJobForm';

function NewJob() {
  return (
    <div className="pt-6 md:pt-8">
      <NewJobForm />
    </div>
  );
}

NewJob.displayName = 'NewJob';

export default withPageTitle(NewJob);
