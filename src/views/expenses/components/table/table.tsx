import type {
  DataTableAdvancedFilterField,
  DataTableFilterField,
  DataTableRowAction,
  Expense,
  ExpenseStatus,
} from './types';
import * as React from 'react';
import { DataTable } from './data-table/data-table';
import { DataTableAdvancedToolbar } from './data-table/data-table-advanced-toolbar';
import { useDataTable } from './data-table/hooks/use-data-table';
import { getStatusIcon, toSentenceCase } from './data-table/lib/utils';
import { DeleteTasksDialog } from './delete-dialog';
import { getColumns } from './columns';
import { TasksTableToolbarActions } from './toolbar-actions';
import { Bell, Eye } from 'lucide-react';
import { Button } from '@cash-compass/ui';

export function Table() {
  const expensesData: Expense[] = [
    {
      id: '1001',
      category: 'Services',
      description: 'Monthly Retainer',
      vendor: 'Consulting Partners LLC',
      date: new Date(2025, 2, 18), // Mar 18, 2025
      amount: 5000.0,
      status: 'approved',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            shortcut: '⌘⌫',
            label: 'Delete',
            className:
              'bg-red-100 text-red-400 !focus:text-red-500 !focus:bg-red-100 !hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
        customActions: [
          (row) => (
            <Button
              aria-label="Open menu"
              variant="ghost"
              className="flex size-8 p-0 data-[state=open]:bg-muted"
            >
              <Eye className="flex size-8 p-0 hover:bg-muted text-green-400" />
            </Button>
          ),
        ],
      },
    },
    {
      id: '1002',
      category: 'Software',
      description: 'Product License - Enterprise Plan',
      vendor: 'Microsoft',
      date: new Date(2025, 2, 15), // Mar 15, 2025
      amount: 12500.0,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1003',
      category: 'Software',
      description: 'SaaS Platform - Annual Subscription',
      vendor: 'Salesforce',
      date: new Date(2025, 2, 12), // Mar 12, 2025
      amount: 8400.0,
      status: 'rejected',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1004',
      category: 'Services',
      description: 'Consulting - Custom Implementation',
      vendor: 'Tech Solutions Inc',
      date: new Date(2025, 2, 10), // Mar 10, 2025
      amount: 8750.0,
      status: 'draft',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
        customActions: [
          (row) => (
            <Button
              aria-label="Open menu"
              variant="ghost"
              className="flex size-8 p-0"
            >
              <Bell className="flex size-8 p-0 hover:bg-muted text-red-400" />
            </Button>
          ),
        ],
      },
    },
    {
      id: '1005',
      category: 'Software',
      description: 'Product Maintenance - Basic Plan',
      vendor: 'Oracle',
      date: new Date(2025, 2, 5), // Mar 5, 2025
      amount: 2800.0,
      status: 'approved',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1006',
      category: 'Software',
      description: 'Software Licensing - Q1',
      vendor: 'Adobe',
      date: new Date(2025, 2, 3), // Mar 3, 2025
      amount: 4350.0,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1007',
      category: 'Hardware',
      description: 'Enterprise Solution Package',
      vendor: 'Dell Technologies',
      date: new Date(2025, 1, 28), // Feb 28, 2025
      amount: 7650.0,
      status: 'rejected',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1008',
      category: 'Services',
      description: 'Technical Support - Monthly Plan',
      vendor: 'IT Support Pro',
      date: new Date(2025, 1, 25), // Feb 25, 2025
      amount: 3200.0,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1009',
      category: 'Services',
      description: 'Cloud Solution Implementation',
      vendor: 'Amazon Web Services',
      date: new Date(2025, 1, 20), // Feb 20, 2025
      amount: 9800.0,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1010',
      category: 'Services',
      description: 'Strategic Consulting Services',
      vendor: 'McKinsey & Company',
      date: new Date(2025, 1, 15), // Feb 15, 2025
      amount: 11250.0,
      status: 'rejected',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1011',
      category: 'Software',
      description: 'Project Management Tool Access',
      vendor: 'Atlassian',
      date: new Date(2025, 1, 10), // Feb 10, 2025
      amount: 5675.0,
      status: 'draft',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1012',
      category: 'Services',
      description: 'Data Analytics Service',
      vendor: 'Tableau',
      date: new Date(2025, 1, 5), // Feb 5, 2025
      amount: 4125.0,
      status: 'approved',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1013',
      category: 'Services',
      description: 'Premium Support Package',
      vendor: 'ServiceNow',
      date: new Date(2025, 0, 28), // Jan 28, 2025
      amount: 8950.0,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1014',
      category: 'Training',
      description: 'Digital Transformation Workshop',
      vendor: 'Digital Learning Institute',
      date: new Date(2025, 0, 20), // Jan 20, 2025
      amount: 6300.0,
      status: 'rejected',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '1015',
      category: 'Software',
      description: 'Enterprise License Agreement',
      vendor: 'SAP',
      date: new Date(2025, 0, 15), // Jan 15, 2025
      amount: 15800.0,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    // Adding specific expense transactions that match the UI image
    {
      id: '2001',
      category: 'Software',
      description: 'Adobe Creative Cloud',
      vendor: 'Adobe',
      date: new Date(2025, 2, 17), // Mar 17, 2025
      amount: 59.99,
      status: 'approved',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2002',
      category: 'Travel',
      description: 'Conference Travel to Boston',
      vendor: 'Delta Airlines',
      date: new Date(2025, 2, 15), // Mar 15, 2025
      amount: 1247.88,
      status: 'approved',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2003',
      category: 'Office',
      description: 'Office supplies',
      vendor: 'Staples',
      date: new Date(2025, 2, 14), // Mar 14, 2025
      amount: 87.65,
      status: 'pending',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2004',
      category: 'Meals',
      description: 'Client lunch meeting',
      vendor: 'Ocean Grill',
      date: new Date(2025, 2, 12), // Mar 12, 2025
      amount: 127.8,
      status: 'rejected',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2005',
      category: 'Equipment',
      description: 'New monitor for design team',
      vendor: 'Best Buy',
      date: new Date(2025, 2, 8), // Mar 8, 2025
      amount: 349.99,
      status: 'draft',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2006',
      category: 'Events',
      description: 'Q1 Team Building Event',
      vendor: 'Event Planning Co',
      date: new Date(2025, 2, 5), // Mar 5, 2025
      amount: 850.0,
      status: 'rejected',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2007',
      category: 'Utilities',
      description: 'Monthly Office Rent',
      vendor: 'Property Management LLC',
      date: new Date(2025, 2, 1), // Mar 1, 2025
      amount: 3500.0,
      status: 'draft',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
    {
      id: '2008',
      category: 'Marketing',
      description: 'Facebook Ads - March Campaign',
      vendor: 'Meta',
      date: new Date(2025, 2, 10), // Mar 10, 2025
      amount: 450.0,
      status: 'approved',
      actions: {
        menuActions: [
          {
            label: 'Edit',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
          {
            label: 'Delete',
            className: 'bg-red-100 text-red-400 hover:text-red-500 transition',
            action(row) {
              console.log(`edit row ${row.id}`);
            },
          },
        ],
      },
    },
  ];
  const pageCount = expensesData.length;
  const statusCounts = 10;

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Expense> | null>(null);

  const columns = React.useMemo(() => getColumns(), []);

  /**
   * This component can render either a faceted filter or a search filter based on the `options` prop.
   *
   * @prop options - An array of objects, each representing a filter option. If provided, a faceted filter is rendered. If not, a search filter is rendered.
   *
   * Each `option` object has the following properties:
   * @prop {string} label - The label for the filter option.
   * @prop {string} value - The value for the filter option.
   * @prop {React.ReactNode} [icon] - An optional icon to display next to the label.
   * @prop {boolean} [withCount] - An optional boolean to display the count of the filter option.
   */
  const filterFields: DataTableFilterField<Expense>[] = [
    {
      id: 'id',
      label: 'customer name',
      placeholder: 'Filter customer_name...',
    },
    {
      id: 'status',
      label: 'Status',
      options: (
        ['approved', 'pending', 'rejected', 'draft'] as ExpenseStatus[]
      ).map((status) => ({
        label: toSentenceCase(status),
        value: status,
        icon: getStatusIcon(status),
        count: statusCounts,
      })),
    },
    // {
    //   id: "priority",
    //   label: "Priority",
    //   options: tasks.priority.enumValues.map((priority) => ({
    //     label: toSentenceCase(priority),
    //     value: priority,
    //     icon: getPriorityIcon(priority),
    //     count: priorityCounts[priority],
    //   })),
    // },
  ];

  /**
   * Advanced filter fields for the data table.
   * These fields provide more complex filtering options compared to the regular filterFields.
   *
   * Key differences from regular filterFields:
   * 1. More field types: Includes 'text', 'multi-select', 'date', and 'boolean'.
   * 2. Enhanced flexibility: Allows for more precise and varied filtering options.
   * 3. Used with DataTableAdvancedToolbar: Enables a more sophisticated filtering UI.
   * 4. Date and boolean types: Adds support for filtering by date ranges and boolean values.
   */
  const advancedFilterFields: DataTableAdvancedFilterField<Expense>[] = [
    {
      id: 'id',
      label: 'Name',
      type: 'text',
    },
    {
      id: 'category',
      label: 'Category',
      type: 'text',
    },

    {
      id: 'date',
      label: 'issue date',
      type: 'date',
    },
  ];

  const { table } = useDataTable({
    data: expensesData.slice(0, 10),
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: true,
    initialState: {
      sorting: [{ id: 'date', desc: true }],
      columnPinning: { right: ['actions'] },
    },
    getRowId: (originalRow) => originalRow.id.toString(),
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <>
      <DataTable table={table} floatingBar={null}>
        <DataTableAdvancedToolbar
          table={table}
          filterFields={advancedFilterFields}
          shallow={false}
        >
          <TasksTableToolbarActions table={table} />
        </DataTableAdvancedToolbar>
      </DataTable>

      <DeleteTasksDialog
        open={rowAction?.type === 'delete'}
        onOpenChange={() => setRowAction(null)}
        tasks={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </>
  );
}
