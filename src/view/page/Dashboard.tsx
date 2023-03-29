import withPageTitle from '../../common/component/hoc/withPageTitle';
import StatsContainer from '../../common/component/stat/StatsContainer';

function Dashboard() {
  return <StatsContainer />;
}

Dashboard.displayName = 'Dashboard';

export default withPageTitle(Dashboard);
