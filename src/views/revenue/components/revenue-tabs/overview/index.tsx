import AccountsReceivableCards from './accounts-receivable-cards';

import { RevenueDonutChart } from './revenue-donut-chart';
import RevenueTrend from './revenue-trend';

const RevenueOverview = () => {
  return (
    <>
      <div className="grid grid-cols-7 gap-4 my-4">
        <div className="col-span-5">
          <RevenueTrend />
        </div>
        <div className="col-span-2">
          <RevenueDonutChart />
        </div>
      </div>
      <AccountsReceivableCards />
    </>
  );
};

export default RevenueOverview;
