import { Timestamp, where } from 'firebase/firestore';
import { useCallback, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import useUserJobs from '../../hook/useUserJobs';
import Loader from '../loader/Loader';

export default function LastYearStats() {
  const lastYear = useMemo(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    return date;
  }, []);

  const data = useUserJobs(
    where('submission_date', '>=', Timestamp.fromDate(lastYear))
  );

  const dataLegacy = useUserJobs(
    where('submissionDate', '>=', Timestamp.fromDate(lastYear))
  );

  const jobs = [...data.jobs, ...dataLegacy.jobs];

  console.log(jobs);

  const getJobsByMonth = useCallback(
    (month: number) =>
      jobs?.filter(job => job.submissionDate?.getMonth() === month),
    [jobs]
  );

  if (data.status === 'loading' || dataLegacy.status === 'loading')
    return <Loader />;

  const statsByMonth = Array.from(
    { length: 12 },
    (_, i) => getJobsByMonth(i)?.length
  );

  return (
    <Bar
      data={{
        labels: Array.from({ length: 12 }, (_, i) =>
          new Date(0, i).toLocaleString('en-us', { month: 'long' })
        ),
        datasets: [
          {
            label: 'Jobs',
            data: statsByMonth,
            backgroundColor: statsByMonth.map(
              stat => `rgba(78, 47, 164, ${stat / Math.max(...statsByMonth)})`
            ),
          },
        ],
      }}
    />
  );
}
