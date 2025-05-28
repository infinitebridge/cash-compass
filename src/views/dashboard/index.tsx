import { Receipt, DollarSign, ReceiptText } from 'lucide-react';
import { PageHeader } from '@cash-compass/blocks';
import { SectionCards } from './components/section-cards';
import ExpensesRevenueTrend from './components/expenses-revenue-trend';
import React from 'react';
import { ExpensesRevenueDonuts } from './components/expenses-revenue-donuts';
import CashFlowProjection from './components/cash-flow-projection-chart';
import { RecentActivities } from './components/recent-activity';

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = React.useState('march');

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);

    console.log(`Fetching data for ${period}`);
  };

  const handleNewExpense = () => {
    console.log('Creating new expense');
  };

  return (
    <div className="px-4 lg:px-6 space-y-4">
      <PageHeader
        timePeriods={[
          { value: 'march', label: 'March 2025' },
          { value: 'february', label: 'February 2025' },
          { value: 'january', label: 'January 2025' },
          { value: 'q1', label: 'Q1 2025' },
          { value: 'ytd', label: 'Year-to-date' },
        ]}
        title="Financial Dashboard"
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
        actionButtonLabel="New Transaction"
        actionButtonColor="bg-blue-600 hover:bg-blue-700"
        dropdownItems={[
          {
            label: 'New Expense',
            icon: <Receipt className="h-4 w-4 mr-2" />,
            iconColor: 'text-blue-500',
            onClick: handleNewExpense,
          },
          {
            label: 'New Revenue',
            icon: <DollarSign className="h-4 w-4 mr-2" />,
            iconColor: 'text-green-500',
            onClick: () => console.log('New revenue'),
          },
          {
            label: 'New Invoice',
            icon: <ReceiptText className="h-4 w-4 mr-2" />,
            iconColor: 'text-purple-500',
            onClick: () => console.log('New invoice'),
          },
        ]}
      />
      <SectionCards />
      <ExpensesRevenueTrend />
      <ExpensesRevenueDonuts />
      <RecentActivities />
      <CashFlowProjection />
    </div>
  );
}

export default Dashboard;
