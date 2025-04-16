import { PageHeader } from '@cash-compass/blocks';
import { DollarSign, ReceiptCent, RefreshCcw } from 'lucide-react';
import React, { useState } from 'react';
import DialogWrapper from './dialog-wrapper';
import { RevenueForm } from './basic-info-form';
import RevenueDetailsForm from './details-form';
import InvoiceForm from './invoice-form';

export function Header() {
  const [selectedPeriod, setSelectedPeriod] = React.useState('march');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    console.log(`Fetching data for ${period}`);
  };

  const handleRecordRevenue = () => {
    setActiveTab(0); // Set to "Record Revenue" tab
    setIsOpen(true); // Open the dialog
  };

  const handleCreateInvoice = () => {
    setActiveTab(1); // Set to "Create Invoice" tab
    setIsOpen(true);
  };

  const handleRecurringRevenue = () => {
    setActiveTab(2); // Set to "Recurring Revenue" tab
    setIsOpen(true);
  };

  const tabs = ['Basic Info', 'Details', 'Invoice Options'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <RevenueForm />;
      case 1:
        return <RevenueDetailsForm />;
      case 2:
        return <InvoiceForm />;
      default:
        return null;
    }
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
            onClick: handleRecordRevenue,
          },
          {
            label: 'Create Invoice',
            icon: <ReceiptCent className="h-4 w-4 mr-2" />,
            iconColor: 'text-green-500',
            onClick: handleCreateInvoice,
          },
          {
            label: 'Recurring Revenue',
            icon: <RefreshCcw className="h-4 w-4 mr-2" />,
            iconColor: 'text-purple-500',
            onClick: handleRecurringRevenue,
          },
        ]}
      />
      <DialogWrapper
        title="New Revenue"
        children={renderTabContent()}
        trigger={null} // No trigger since it's controlled by the dropdown
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default Header;
