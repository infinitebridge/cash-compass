import RevenueManagementTabs from './revenue-tabs';
import Invoices from './revenue-tabs/invoices';
import RevenueOverview from './revenue-tabs/overview';
const tabsConfig = [
  {
    title: 'Revenue Overview',
    component: <RevenueOverview />,
    key: 'overview',
  },
  {
    title: 'Invoices',
    component: <Invoices />,
    key: 'invoices',
  },
];
export function RevenueManagement() {
  return (
    <div className="px-4 lg:px-6">
      <RevenueManagementTabs tabsConfig={tabsConfig} defaultTab="overview" />
    </div>
  );
}
