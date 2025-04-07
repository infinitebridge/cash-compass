import React from 'react';
import { StatisticCard } from '@cash-compass/ui';

/**
 * Interface for the invoice statistics data
 */
export interface InvoiceStatisticsData {
  /** Total invoices amount */
  totalAmount: number;

  /** Total number of invoices */
  invoiceCount: number;

  /** Paid invoices amount */
  paidAmount: number;

  /** Paid invoices count */
  paidCount: number;

  /** Outstanding invoices amount */
  outstandingAmount: number;

  /** Outstanding invoices count */
  outstandingCount: number;

  /** Overdue invoices amount */
  overdueAmount: number;

  /** Overdue invoices count */
  overdueCount: number;
}

/**
 * Props for the InvoiceStatisticsCards component
 */
export interface InvoiceStatisticsCardsProps {
  /** Data for the invoice statistics cards */
  data: InvoiceStatisticsData;

  /** Loading state */
  isLoading?: boolean;
}

/**
 * Component displaying invoice statistics in a set of cards
 */
const InvoiceStatisticsCards: React.FC<InvoiceStatisticsCardsProps> = ({
  data,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg animate-pulse h-24"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatisticCard
        title="Total Invoices"
        value={data.invoiceCount}
        subtitle={`$${data.totalAmount.toLocaleString()} total`}
        bgColor="bg-gray-50"
        borderColor="border-gray-200"
        valueClassName="text-2xl font-bold text-gray-900"
      />

      <StatisticCard
        title="Paid"
        value={data.paidCount}
        subtitle={`$${data.paidAmount.toLocaleString()} received`}
        bgColor="bg-green-50"
        borderColor="border-green-200"
        valueClassName="text-2xl font-bold text-green-700"
      />

      <StatisticCard
        title="Outstanding"
        value={data.outstandingCount}
        subtitle={`$${data.outstandingAmount.toLocaleString()} pending`}
        bgColor="bg-blue-50"
        borderColor="border-blue-200"
        valueClassName="text-2xl font-bold text-blue-700"
      />

      <StatisticCard
        title="Overdue"
        value={data.overdueCount}
        subtitle={`$${data.overdueAmount.toLocaleString()} at risk`}
        bgColor="bg-red-50"
        borderColor="border-red-200"
        valueClassName="text-2xl font-bold text-red-700"
      />
    </div>
  );
};

// Example usage with sample data matching the image
const InvoiceStatisticsExample: React.FC = () => {
  const sampleData = {
    invoiceCount: 28,
    totalAmount: 87450,
    paidCount: 16,
    paidAmount: 50870,
    outstandingCount: 9,
    outstandingAmount: 28830,
    overdueCount: 3,
    overdueAmount: 7750,
  };

  return <InvoiceStatisticsCards data={sampleData} />;
};

export default InvoiceStatisticsExample;
