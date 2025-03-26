import { GenericTable } from '@cash-compass/blocks';
import { Badge } from '@cash-compass/ui/badge';
import { Button } from '@cash-compass/ui/button';
import { ColumnDef } from '@tanstack/react-table';

export type TransactionStatus =
  | 'Invoiced'
  | 'Paid'
  | 'Approved'
  | 'Overdue'
  | 'Pending';

export type Transaction = {
  id: string;
  date: string;
  type: 'Revenue' | 'Expense';
  description: string;
  category: string;
  amount: number;
  status: TransactionStatus;
  actions: string[];
};

// Mock data that matches the screenshot
const transactionData: Transaction[] = [
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

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'DATE',
    cell: ({ row }) => <div>{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'type',
    header: 'TYPE',
    cell: ({ row }) => {
      const type = row.getValue('type') as string;
      return (
        <Badge
          variant="outline"
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            type === 'Revenue'
              ? 'bg-green-50 text-green-700 border-transparent'
              : 'bg-blue-50 text-blue-700 border-transparent'
          }`}
        >
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION',
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY',
    cell: ({ row }) => <div>{row.getValue('category')}</div>,
  },
  {
    accessorKey: 'amount',
    header: 'AMOUNT',
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;

      let badgeStyle = '';
      switch (status) {
        case 'Invoiced':
          badgeStyle = 'bg-blue-50 text-blue-700 border-transparent';
          break;
        case 'Paid':
          badgeStyle = 'bg-green-50 text-green-700 border-transparent';
          break;
        case 'Approved':
          badgeStyle = 'bg-green-50 text-green-700 border-transparent';
          break;
        case 'Overdue':
          badgeStyle = 'bg-red-50 text-red-700 border-transparent';
          break;
        default:
          badgeStyle = 'bg-gray-50 text-gray-700 border-transparent';
      }

      return (
        <Badge
          variant="outline"
          className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyle}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: 'ACTIONS',
    cell: ({ row }) => {
      const actions = row.original.actions;

      return (
        <div className="flex gap-2 justify-end">
          <Button
            variant="link"
            className="text-blue-600 h-auto p-0 font-medium"
          >
            View
          </Button>
          {actions.includes('Record Payment') && (
            <Button
              variant="link"
              className="text-green-600 h-auto p-0 font-medium"
            >
              Record Payment
            </Button>
          )}
          {actions.includes('Send Reminder') && (
            <Button
              variant="link"
              className="text-red-600 h-auto p-0 font-medium"
            >
              Send Reminder
            </Button>
          )}
        </div>
      );
    },
  },
];

// Update the page component to better match the image layout
export function RecentTransactions() {
  return (
    <main className="container mx-auto py-10">
      <GenericTable
        data={transactionData}
        columns={columns}
        title="Recent Activity"
        filterColumn="description"
        enableSorting={true}
        enableFiltering={true}
        enablePagination={true}
        enableColumnVisibility={true}
        defaultPageSize={5}
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
    </main>
  );
}
