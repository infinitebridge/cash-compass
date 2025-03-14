import { type ColumnDef } from '@tanstack/react-table';
import { Transaction } from './types';

import {
  Badge,
  Checkbox,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@finbridge-manager-apps/ui';
import { formatDate } from './utils';

import { formatCurrency } from '../../../lib/utils';
import { DataTableColumnHeader } from './data-table/data-table-column-header';
import TransactionActions from './transaction-actions';

export function getColumns(): ColumnDef<Transaction>[] {
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
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'category',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Category" />
      ),
      cell: ({ row }) => <div className="w-20">{row.getValue('category')}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'amount',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('amount'));

        return (
          <Badge
            variant={amount < 0 ? 'destructive' : 'outline'}
            className="px-2 py-1 text-xs font-medium"
          >
            {formatCurrency(amount)}
          </Badge>
        );
      },
      enableHiding: true,
    },
    {
      accessorKey: 'account',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Account" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.getValue('account')}
            </span>
          </div>
        );
      },
      enableHiding: true,
    },
    {
      accessorKey: 'payee',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Payee" />
      ),
      cell: ({ cell, row }) => (
        <div className="flex space-x-2">
          {row.original.payeeCompany ? (
            <div className="focus:ring-ring text-foreground inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
              {row.original.payeeCompany}
            </div>
          ) : null}
          <div>{cell.getValue() as string}</div>
        </div>
      ),
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
      accessorKey: 'note',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Note" />
      ),
      cell: ({ cell }) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="max-w-[20rem] truncate">
                {cell.getValue() as string}
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-80">
              {cell.getValue() as string}{' '}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      enableHiding: true,
    },
    {
      id: 'actions',
      cell: function Cell({ row }) {
        const rowData = row.original;
        return <TransactionActions data={rowData} />;
      },
    },
  ];
}
