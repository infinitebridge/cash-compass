import { TransactionsTable, type Transaction } from '@cash-compass/blocks';

// Mock data that matches the screenshot
const transactions: Transaction[] = [
  {
    id: '1',
    date: 'Mar 18',
    type: 'Revenue',
    description: 'XYZ Corp Monthly Retainer',
    category: 'Services',
    amount: 5000.0,
    status: 'Invoiced',
    actions: ['Record Payment'],
  },
  {
    id: '2',
    date: 'Mar 17',
    type: 'Expense',
    description: 'Adobe Creative Cloud',
    category: 'Software',
    amount: 59.99,
    status: 'Paid',
    actions: [],
  },
  {
    id: '3',
    date: 'Mar 15',
    type: 'Revenue',
    description: 'Product License - ABC Inc',
    category: 'Product Sales',
    amount: 12500.0,
    status: 'Paid',
    actions: [],
  },
  {
    id: '4',
    date: 'Mar 15',
    type: 'Expense',
    description: 'Conference Travel to Boston',
    category: 'Travel',
    amount: 1247.88,
    status: 'Approved',
    actions: [],
  },
  {
    id: '5',
    date: 'Mar 10',
    type: 'Revenue',
    description: 'Consulting - DEF Corp',
    category: 'Services',
    amount: 8750.0,
    status: 'Overdue',
    actions: ['Send Reminder'],
  },
];

// Update the page component to better match the image layout
export function RecentTransactions() {
  return (
    <main className="container mx-auto py-10">
      <TransactionsTable data={transactions} />
    </main>
  );
}
