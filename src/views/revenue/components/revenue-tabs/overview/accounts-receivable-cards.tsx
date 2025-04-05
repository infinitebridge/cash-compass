import React from 'react';
import { StatisticCard } from '@cash-compass/ui';

/**
 * Interface for the accounts receivable data
 */
export interface ReceivablesData {
  /** Total receivables amount */
  totalAmount: number;

  /** Total number of invoices */
  invoiceCount: number;

  /** Current receivables (1-30 days) amount */
  currentAmount: number;

  /** Current invoices count */
  currentCount: number;

  /** 30-60 days receivables amount */
  thirtyToSixtyAmount: number;

  /** 30-60 days invoices count */
  thirtyToSixtyCount: number;

  /** 60+ days receivables amount */
  sixtyPlusAmount: number;

  /** 60+ days invoices count */
  sixtyPlusCount: number;
}

/**
 * Props for the AccountsReceivableCards component
 */
export interface AccountsReceivableCardsProps {
  /** Data for the accounts receivable cards */
  data: ReceivablesData;

  /** Loading state */
  isLoading?: boolean;
}
const AccountsReceivableCards: React.FC<AccountsReceivableCardsProps> = ({
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
        title="Total Receivables"
        value={`$${data.totalAmount.toLocaleString()}`}
        subtitle={`${data.invoiceCount} invoices`}
        bgColor="bg-gray-50"
        borderColor="border-gray-200"
      />

      <StatisticCard
        title="Current (1-30 days)"
        value={`$${data.currentAmount.toLocaleString()}`}
        subtitle={`${data.currentCount} invoices`}
        bgColor="bg-blue-50"
        borderColor="border-blue-200"
      />

      <StatisticCard
        title="30-60 days"
        value={`$${data.thirtyToSixtyAmount.toLocaleString()}`}
        subtitle={`${data.thirtyToSixtyCount} invoices`}
        bgColor="bg-yellow-50"
        borderColor="border-yellow-200"
      />

      <StatisticCard
        title="60+ days overdue"
        value={`$${data.sixtyPlusAmount.toLocaleString()}`}
        subtitle={`${data.sixtyPlusCount} invoices`}
        bgColor="bg-red-50"
        borderColor="border-red-200"
      />
    </div>
  );
};

// Example usage with sample data
const ReceivablesExample: React.FC = () => {
  const sampleData = {
    totalAmount: 36580,
    invoiceCount: 12,
    currentAmount: 18450,
    currentCount: 5,
    thirtyToSixtyAmount: 10380,
    thirtyToSixtyCount: 4,
    sixtyPlusAmount: 7750,
    sixtyPlusCount: 3,
  };

  return (
    <div className="w-full p-4 rounded-xl border bg-card text-card-foreground shadow @container/card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Accounts Receivable
      </h2>
      <AccountsReceivableCards data={sampleData} />
    </div>
  );
};

export default ReceivablesExample;
