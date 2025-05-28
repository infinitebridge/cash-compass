import AccountsReceivableCards from './accounts-receivable-cards';

import { RevenueDonutChart } from './revenue-donut-chart';
import TableComponent from './revenue-table/table-component';
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
      <div className="w-full p-4 rounded-xl border bg-card text-card-foreground space-y-4 shadow @container/card">
        <AccountsReceivableCards />
        <TableComponent />
      </div>
    </>
  );
};

export default RevenueOverview;
