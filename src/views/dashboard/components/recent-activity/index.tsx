import { Card, CardContent, CardHeader, CardTitle } from '@cash-compass/ui';
import Transactions from './transactions';
import Invoices from './invoices';
import Expenses from './expenses';
import Revenue from './revenue';

import ActivitiesTab from './tabs';

const tabsConfig = [
  {
    title: 'All activities',
    component: <Transactions />,
    key: 'all',
  },
  {
    title: 'Expenses',
    component: <Expenses />,
    key: 'expenses',
  },
  {
    title: 'Revenue',
    component: <Revenue />,
    key: 'revenue',
  },
  {
    title: 'Invoices',
    component: <Invoices />,
    key: 'invoices',
  },
];
export const RecentActivities = () => {
  return (
    <Card className="!p-4">
      <CardHeader className="!p-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activities
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="!p-0">
        <ActivitiesTab tabsConfig={tabsConfig} defaultTab="all" />
      </CardContent>
    </Card>
  );
};
