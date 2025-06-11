import RevenueTabs from './revenue-tabs';
import Invoices from './revenue-tabs/invoices';
import RevenueOverview from './revenue-tabs/overview';
import { StatisticsCards } from './components/statistic-cards';
import { Header } from './components/header';
import Customers from './revenue-tabs/customers';
import { RevenueDialog } from './components/revenue-dialog';
import useDialogStore from './components/revenue-dialog/dialog-store';
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
  {
    title: 'Customers',
    component: <Customers />,
    key: 'customers',
  },
];
export function RevenueManagement() {
  return (
    <div className="px-4 space-y-4 lg:px-6">
      <Header />
      <StatisticsCards />
      <RevenueTabs tabsConfig={tabsConfig} defaultTab="overview" />
      <RevenueDialog />
    </div>
  );
}
