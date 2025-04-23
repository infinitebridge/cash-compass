import type {
  DataTableAdvancedFilterField,
  DataTableFilterField,
  DataTableRowAction,
  Invoice,
} from './types';
import * as React from 'react';
import { DataTable } from './data-table/data-table';
import { DataTableAdvancedToolbar } from './data-table/data-table-advanced-toolbar';
import { useDataTable } from './data-table/hooks/use-data-table';
import { getStatusIcon, toSentenceCase } from './data-table/lib/utils';
import { DeleteTasksDialog } from './delete-dialog';
import { getColumns } from './columns';
import { TasksTableToolbarActions } from './toolbar-actions';

export function Table() {
  const invoices: Invoice[] = [
    {
      invoice_id: 1001,
      invoice_number: 'INV-2025-018',
      customer_name: 'XYZ Corporation',
      issue_date: new Date(2025, 2, 18), // Mar 18, 2025
      due_date: new Date(2025, 3, 17), // Apr 17, 2025
      amount_total: 5000.0,
      balance_remaining: 5000.0,
      status: 'Sent',
    },
    {
      invoice_id: 1002,
      invoice_number: 'INV-2025-017',
      customer_name: 'ABC Inc',
      issue_date: new Date(2025, 2, 15), // Mar 15, 2025
      due_date: new Date(2025, 3, 14), // Apr 14, 2025
      amount_total: 12500.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1003,
      invoice_number: 'INV-2025-016',
      customer_name: 'Global Solutions Ltd',
      issue_date: new Date(2025, 2, 12), // Mar 12, 2025
      due_date: new Date(2025, 3, 11), // Apr 11, 2025
      amount_total: 8400.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1004,
      invoice_number: 'INV-2025-015',
      customer_name: 'DEF Corp',
      issue_date: new Date(2025, 2, 10), // Mar 10, 2025
      due_date: new Date(2025, 2, 9), // Mar 9, 2025 (overdue)
      amount_total: 8750.0,
      balance_remaining: 8750.0,
      status: 'Overdue',
    },
    {
      invoice_id: 1005,
      invoice_number: 'INV-2025-014',
      customer_name: 'Tech Innovations LLC',
      issue_date: new Date(2025, 2, 5), // Mar 5, 2025
      due_date: new Date(2025, 3, 4), // Apr 4, 2025
      amount_total: 2800.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1006,
      invoice_number: 'INV-2025-013',
      customer_name: 'Acme Enterprises',
      issue_date: new Date(2025, 2, 3), // Mar 3, 2025
      due_date: new Date(2025, 3, 2), // Apr 2, 2025
      amount_total: 4350.0,
      balance_remaining: 4350.0,
      status: 'Sent',
    },
    {
      invoice_id: 1007,
      invoice_number: 'INV-2025-012',
      customer_name: 'Innovative Systems Inc',
      issue_date: new Date(2025, 1, 28), // Feb 28, 2025
      due_date: new Date(2025, 2, 30), // Mar 30, 2025
      amount_total: 7650.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1008,
      invoice_number: 'INV-2025-011',
      customer_name: 'First Choice Services',
      issue_date: new Date(2025, 1, 25), // Feb 25, 2025
      due_date: new Date(2025, 2, 27), // Mar 27, 2025
      amount_total: 3200.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1009,
      invoice_number: 'INV-2025-010',
      customer_name: 'Summit Solutions',
      issue_date: new Date(2025, 1, 20), // Feb 20, 2025
      due_date: new Date(2025, 2, 22), // Mar 22, 2025
      amount_total: 9800.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1010,
      invoice_number: 'INV-2025-009',
      customer_name: 'Horizon Consulting',
      issue_date: new Date(2025, 1, 15), // Feb 15, 2025
      due_date: new Date(2025, 2, 1), // Mar 1, 2025 (overdue)
      amount_total: 11250.0,
      balance_remaining: 11250.0,
      status: 'Overdue',
    },
    {
      invoice_id: 1011,
      invoice_number: 'INV-2025-008',
      customer_name: 'Dynamic Partners LLC',
      issue_date: new Date(2025, 1, 10), // Feb 10, 2025
      due_date: new Date(2025, 2, 12), // Mar 12, 2025
      amount_total: 5675.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1012,
      invoice_number: 'INV-2025-007',
      customer_name: 'Elite Industries',
      issue_date: new Date(2025, 1, 5), // Feb 5, 2025
      due_date: new Date(2025, 2, 7), // Mar 7, 2025
      amount_total: 4125.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1013,
      invoice_number: 'INV-2025-006',
      customer_name: 'Premier Solutions Corp',
      issue_date: new Date(2025, 0, 28), // Jan 28, 2025
      due_date: new Date(2025, 1, 27), // Feb 27, 2025
      amount_total: 8950.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1014,
      invoice_number: 'INV-2025-005',
      customer_name: 'NextGen Systems',
      issue_date: new Date(2025, 0, 20), // Jan 20, 2025
      due_date: new Date(2025, 1, 19), // Feb 19, 2025
      amount_total: 6300.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
    {
      invoice_id: 1015,
      invoice_number: 'INV-2025-004',
      customer_name: 'Global Enterprise Partners',
      issue_date: new Date(2025, 0, 15), // Jan 15, 2025
      due_date: new Date(2025, 1, 14), // Feb 14, 2025
      amount_total: 15800.0,
      balance_remaining: 0.0,
      status: 'Paid',
    },
  ];
  const pageCount = invoices.length;
  const statusCounts = 10;

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Invoice> | null>(null);

  const columns = React.useMemo(() => getColumns({ setRowAction }), []);

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
  const filterFields: DataTableFilterField<Invoice>[] = [
    {
      id: 'customer_name',
      label: 'customer name',
      placeholder: 'Filter customer_name...',
    },
    {
      id: 'status',
      label: 'Status',
      options: (
        ['Sent', 'Paid', 'Overdue', 'Draft', 'Cancelled'] as Invoice['status'][]
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
  const advancedFilterFields: DataTableAdvancedFilterField<Invoice>[] = [
    {
      id: 'invoice_id',
      label: 'Name',
      type: 'text',
    },
    {
      id: 'status',
      label: 'Status',
      type: 'multi-select',
      options: (
        ['Sent', 'Paid', 'Overdue', 'Draft', 'Cancelled'] as Invoice['status'][]
      ).map((status) => ({
        label: toSentenceCase(status),
        value: status,
        icon: getStatusIcon(status),
        count: statusCounts,
      })),
    },

    {
      id: 'issue_date',
      label: 'issue date',
      type: 'date',
    },
    {
      id: 'due_date',
      label: 'Due date',
      type: 'date',
    },
  ];

  const { table } = useDataTable({
    data: invoices.slice(0, 10),
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: true,
    initialState: {
      sorting: [
        { id: 'issue_date', desc: true },
        { id: 'due_date', desc: true },
      ],
      columnPinning: { right: ['actions'] },
    },
    getRowId: (originalRow) => originalRow.invoice_id.toString(),
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
