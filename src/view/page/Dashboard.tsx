import withPageTitle from '../../common/component/hoc/withPageTitle';
import LastYearStats from '../../common/component/stat/LastYearStats';
import StatsCardsContainer from '../../common/component/stat/StatsCardsContainer';

function Dashboard() {
  return (
    <div className="grid gap-y-8 lg:gap-y-16">
      <StatsCardsContainer />
      <div className="mx-auto lg:w-4/5">
        <LastYearStats />
      </div>
    </div>
  );
}

Dashboard.displayName = 'Dashboard';

export default withPageTitle(Dashboard);
