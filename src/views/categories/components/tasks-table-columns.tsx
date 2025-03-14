import { type ColumnDef } from '@tanstack/react-table';
import { Category } from './types';

import { Checkbox } from '@finbridge-manager-apps/ui';
import { formatDate } from './utils';

import { CategoryActions } from './category-actions';
import { DataTableColumnHeader } from './data-table/data-table-column-header';
import Transactions from './transaction';

export function getColumns(): ColumnDef<Category>[] {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),

      enableHiding: true,
    },
    {
      accessorKey: 'transactions',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Transaction count" />
      ),

      cell: ({ row }) => {
        return (
          <Transactions
            categoryId={row.original.id}
            type={row.original.type}
            transactionsCount={row.original.transactions}
          />
        );
      },

      enableHiding: true,
    },
    {
      accessorKey: 'date',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Added At" />
      ),
      cell: ({ cell, row }) => (
        <div className="flex space-x-2">
          <div className="focus:ring-ring text-foreground inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
            {row.original.readableDate} ago
          </div>
          <div>{formatDate(cell.getValue() as Date)}</div>
        </div>
      ),
      enableHiding: true,
    },
    {
      id: 'actions',
      cell: function Cell({ row }) {
        const rowData = row.original;
        return <CategoryActions data={rowData} />;
      },
    },
  ];
}
