import { PageHeader } from '@cash-compass/blocks';
import { Plus } from 'lucide-react';
import React from 'react';

export function Header() {
  const [selectedPeriod, setSelectedPeriod] = React.useState('march');
  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    console.log(`Fetching data for ${period}`);
  };

  return (
    <PageHeader
      useActionButtons={true}
      actionButtons={[
        {
          label: 'New Expense',
          variant: 'primary',
          icon: <Plus className="h-4 w-4" />,
        },
      ]}
      timePeriods={[
        { value: 'march', label: 'March 2025' },
        { value: 'february', label: 'February 2025' },
        { value: 'january', label: 'January 2025' },
        { value: 'q1', label: 'Q1 2025' },
        { value: 'ytd', label: 'Year-to-date' },
      ]}
      title="Expense Tracking"
      selectedPeriod={selectedPeriod}
      onPeriodChange={handlePeriodChange}
    />
  );
}
