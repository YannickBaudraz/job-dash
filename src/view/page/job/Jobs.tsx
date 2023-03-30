import { Typography } from '@material-tailwind/react';
import JobCard from '../../../common/component/card/JobCard';
import withPageTitle from '../../../common/component/hoc/withPageTitle';
import Loader from '../../../common/component/loader/Loader';
import useUserJobs from '../../../common/hook/useUserJobs';

function Jobs() {
  const { jobs, status } = useUserJobs();

  if (status === 'loading') return <Loader />;

  const isPlural = jobs?.length > 1;

  return (
    <section>
      <header className="mb-4">
        <Typography variant="h5" as="p" color="gray">
          {jobs?.length} Job{isPlural ? 's' : ''} Found
        </Typography>
      </header>
      <div className="grid grid-cols-1 gap-4 pb-4 md:pb-8 lg:grid-cols-2">
        {jobs?.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

Jobs.displayName = 'Jobs';

export default withPageTitle(Jobs);
