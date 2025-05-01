import { Card, CardContent, CardHeader, CardTitle } from '@cash-compass/ui';
import TransactionsTable from './transactions-table';
import InvoiceTable from './invoices-table';

import ActivitiesTab from './tabs';

const tabsConfig = [
  {
    title: 'All activities',
    component: <TransactionsTable />,
    key: 'all',
  },
  {
    title: 'Invoices',
    component: <InvoiceTable />,
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
