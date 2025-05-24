import type {
  DataTableAdvancedFilterField,
  DataTableFilterField,
  DataTableRowAction,
  Customer,
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
  const invoices: Customer[] = [
    {
      id: '1',
      name: 'ABC Inc',
      type: 'Enterprise customer',
      avatar: 'A',
      avatarColor: 'blue',
      status: 'Active',
      revenueYTD: 42500,
      lastTransaction: new Date('2025-03-15'),
      contactPerson: 'John Smith',
    },
    {
      id: '2',
      name: 'XYZ Corporation',
      type: 'Enterprise customer',
      avatar: 'X',
      avatarColor: 'green',
      status: 'Active',
      revenueYTD: 35000,
      lastTransaction: new Date('2025-03-18'),
      contactPerson: 'Sarah Johnson',
    },
    {
      id: '3',
      name: 'Global Solutions Ltd',
      type: 'Enterprise customer',
      avatar: 'G',
      avatarColor: 'purple',
      status: 'Active',
      revenueYTD: 28400,
      lastTransaction: new Date('2025-03-12'),
      contactPerson: 'Robert Chen',
    },
    {
      id: '4',
      name: 'DEF Corp',
      type: 'Corporate account',
      avatar: 'D',
      avatarColor: 'red',
      status: 'At Risk',
      revenueYTD: 18750,
      lastTransaction: new Date('2025-03-10'),
      contactPerson: 'Michael Garcia',
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
              console.log(`delete row ${row.id}`);
            },
          },
        ],
      },
    },
  ];
  const pageCount = invoices.length;
  const statusCounts = 10;

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Customer> | null>(null);

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
  const filterFields: DataTableFilterField<Customer>[] = [
    {
      id: 'name',
      label: 'customer name',
      placeholder: 'Filter customer name...',
    },
    {
      id: 'status',
      label: 'Status',
      options: (['Active', 'Inactive', 'At Risk'] as Customer['status'][]).map(
        (status) => ({
          label: toSentenceCase(status as string),
          value: status,
          icon: getStatusIcon(status),
          count: statusCounts,
        })
      ),
    },
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

  const advancedFilterFields: DataTableAdvancedFilterField<Customer>[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      id: 'status',
      label: 'Status',
      type: 'multi-select',
      options: (
        ['Active', 'Inactive', 'At Risk', 'New'] as Customer['status'][]
      ).map((status) => ({
        label: toSentenceCase(status as string),
        value: status,
        icon: getStatusIcon(status),
        count: statusCounts,
      })),
    },

    {
      id: 'lastTransaction',
      label: 'Last Transaction',
      type: 'date',
    },
    {
      id: 'revenueYTD',
      label: 'Revenue YTD',
      type: 'number',
    },
  ];

  const { table } = useDataTable({
    data: invoices.slice(0, 10),
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: true,
    initialState: {
      // sorting: [
      //   { id: 'type', desc: true },
      //   { id: 'status', desc: true },
      // ],
      // columnPinning: { right: ['actions'] },
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
