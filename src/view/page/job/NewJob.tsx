import withPageTitle from '../../../common/component/hoc/withPageTitle';
import JobForm from '../../form/JobForm';

function NewJob() {
  return (
    <div className="pt-6 md:pt-8">
      <JobForm />
    </div>
  );
}

NewJob.displayName = 'NewJob';

export default withPageTitle(NewJob);
