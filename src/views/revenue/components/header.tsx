import { PageHeader } from '@cash-compass/blocks';
import { DollarSign, ReceiptCent, RefreshCcw } from 'lucide-react';
import React from 'react';
import useDialogStore from './revenue-dialog/dialog-store';
import useInvoiceDialogStore from './invoice-dialog/invoice-dialog-store';

export function Header() {
  const [selectedPeriod, setSelectedPeriod] = React.useState('march');
  const { openDialog: openRevenueDialog } = useDialogStore();
  const { openInvoiceDialog } = useInvoiceDialogStore();

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    console.log(`Fetching data for ${period}`);
  };

  const handleCreateInvoice = () => {
    console.log('ok');
  };

  const handleRecurringRevenue = () => {
    console.log('ok');
  };

  return (
    <>
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
            onClick: openRevenueDialog,
          },
          {
            label: 'Create Invoice',
            icon: <ReceiptCent className="h-4 w-4 mr-2" />,
            iconColor: 'text-green-500',
            onClick: openInvoiceDialog,
          },
          {
            label: 'Recurring Revenue',
            icon: <RefreshCcw className="h-4 w-4 mr-2" />,
            iconColor: 'text-purple-500',
            onClick: handleRecurringRevenue,
          },
        ]}
      />
    </>
  );
}

export default Header;
