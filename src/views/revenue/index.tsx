import RevenueManagementTabs from './revenue-tabs';
import Invoices from './revenue-tabs/invoices';
import RevenueOverview from './revenue-tabs/overview';
import { PageHeader } from '@cash-compass/blocks';
import { DollarSign, ReceiptCent, RefreshCcw } from 'lucide-react';
import React from 'react';
import { SectionCards } from '../dashboard/components/section-cards';
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
  const [selectedPeriod, setSelectedPeriod] = React.useState('march');

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    console.log(`Fetching data for ${period}`);
  };

  const handleNewExpense = () => {
    console.log('Creating new expense');
  };

  return (
    <div className="px-4 space-y-4 lg:px-6">
      <PageHeader
        timePeriods={[
          { value: 'march', label: 'March 2025' },
          { value: 'february', label: 'February 2025' },
          { value: 'january', label: 'January 2025' },
          { value: 'q1', label: 'Q1 2025' },
          { value: 'ytd', label: 'Year-to-date' },
        ]}
        title="Revenue Management"
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
        actionButtonLabel="New Revenue"
        actionButtonColor="bg-blue-600 hover:bg-blue-700"
        dropdownItems={[
          {
            label: 'Record Revenue',
            icon: <DollarSign className="h-4 w-4 mr-2" />,
            iconColor: 'text-blue-500',
            onClick: handleNewExpense,
          },
          {
            label: 'Create Invoice',
            icon: <ReceiptCent className="h-4 w-4 mr-2" />,
            iconColor: 'text-green-500',
            onClick: () => console.log('New revenue'),
          },
          {
            label: 'Recurring revenue',
            icon: <RefreshCcw className="h-4 w-4 mr-2" />,
            iconColor: 'text-purple-500',
            onClick: () => console.log('New invoice'),
          },
        ]}
      />
      <SectionCards />
      <RevenueManagementTabs tabsConfig={tabsConfig} defaultTab="overview" />
    </div>
  );
}
