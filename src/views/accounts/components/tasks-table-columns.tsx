import { type ColumnDef } from '@tanstack/react-table';
import { Account } from './types';

import { Badge, Checkbox } from '@finbridge-manager-apps/ui';
import { formatDate } from './utils';

import { cx } from 'class-variance-authority';
import { formatCurrency } from '../../../lib/utils';
import TransactionLink from './TransactionLink';
import { AccountActions } from './account-actions';
import { DataTableColumnHeader } from './data-table/data-table-column-header';

export function getColumns(): ColumnDef<Account>[] {
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
      accessorKey: 'total_income',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Income" />
      ),
      cell: ({ row }) => {
        return (
          <TransactionLink
            type="income"
            accountId={row.original.id}
            value={row.original.total_income}
          />
        );
      },
      enableSorting: true,
      enableHiding: true,
    },

    {
      accessorKey: 'total_expense',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Expense" />
      ),
      cell: ({ row }) => {
        return (
          <TransactionLink
            type="expense"
            accountId={row.original.id}
            value={row.original.total_expense}
          />
        );
      },
      enableSorting: true,
      enableHiding: true,
    },

    {
      accessorKey: 'total_revenue',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Revenue" />
      ),
      cell: ({ row }) => {
        const income = row.original.total_income;
        const expense = row.original.total_expense;
        const revenue = income - expense;
        return (
          <Badge
            variant={'outline'}
            className={cx(
              'px-2 py-1 text-xs',
              revenue < 0 ? 'border-red-600/10 bg-red-50 text-red-700' : ''
            )}
          >
            {formatCurrency(revenue)}
          </Badge>
        );
      },
      enableSorting: true,
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
        return <AccountActions data={rowData} />;
      },
    },
  ];
}
