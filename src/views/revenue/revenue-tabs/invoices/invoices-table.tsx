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

export type Invoice = {
  date: string;
  description: string;
  customer: string;
  source: string;
  invoice_id: string;
  amount: number;
  status: TransactionStatus;
  actions: string[];
};

const invoicesData: Invoice[] = [
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 18',
    customer: 'XYZ Corporation',
    source: 'Services',
    description: 'Monthly Retainer',
    amount: 5000.0,
    status: 'Invoiced',
    actions: ['Record Payment'],
  },
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 17',
    customer: 'ABC Industries',
    source: 'Product Sales',
    description: 'Software License',
    amount: 8500.0,
    status: 'Paid',
    actions: [],
  },
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 15',
    customer: 'Tech Solutions Ltd',
    source: 'Consulting',
    description: 'Project Implementation',
    amount: 12000.0,
    status: 'Overdue',
    actions: ['Send Reminder'],
  },
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 14',
    customer: 'Global Systems Inc',
    source: 'Services',
    description: 'System Maintenance',
    amount: 3500.0,
    status: 'Pending',
    actions: ['Record Payment'],
  },
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 12',
    customer: 'DataTech Solutions',
    source: 'Product Sales',
    description: 'Enterprise Package',
    amount: 15000.0,
    status: 'Approved',
    actions: [],
  },
  {
    invoice_id: 'INV-2025-018',

    date: 'Mar 10',
    customer: 'Innovative Startups',
    source: 'Consulting',
    description: 'Strategic Planning',
    amount: 7500.0,
    status: 'Invoiced',
    actions: ['Record Payment'],
  },
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 08',
    customer: 'Future Corp',
    source: 'Services',
    description: 'Cloud Migration',
    amount: 20000.0,
    status: 'Paid',
    actions: [],
  },
  {
    invoice_id: 'INV-2025-018',
    date: 'Mar 05',
    customer: 'Smart Solutions',
    source: 'Product Sales',
    description: 'Annual Subscription',
    amount: 9500.0,
    status: 'Overdue',
    actions: ['Send Reminder'],
  },
];

export const columns: (ColumnDef<Invoice> & {
  accessorKey: keyof Invoice;
})[] = [
  {
    accessorKey: 'date',
    header: 'DATE',
    cell: ({ row }) => <div>{row.getValue('date')}</div>,
  },

  {
    accessorKey: 'description',
    header: 'DESCRIPTION',
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'customer',
    header: 'CUSTOMER',
    cell: ({ row }) => <div>{row.getValue('customer')}</div>,
  },
  {
    accessorKey: 'source',
    header: 'SOURCE',
    cell: ({ row }) => <div>{row.getValue('source')}</div>,
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
    accessorKey: 'invoice_id',
    header: 'INVOICE',
    cell: ({ row }) => (
      <div className="hover:underline hover:text-blue-700 text-blue-600">
        {row.getValue('invoice')}
      </div>
    ),
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
export function InvoiceTable() {
  return (
    <GenericTable
      data={invoicesData}
      columns={columns}
      filterColumn="description"
      enableSorting={true}
      enableFiltering={true}
      enablePagination={true}
      enableColumnVisibility={true}
      defaultPageSize={5}
      onRowClick={(row) => console.log('Row clicked:', row)}
    />
  );
}
