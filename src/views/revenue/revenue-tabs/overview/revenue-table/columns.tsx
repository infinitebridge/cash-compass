import { RevenueTransation } from './types';

import type { ColumnDef } from '@tanstack/react-table';
import { CircleDashed, EllipsisVertical } from 'lucide-react';

import { DataTableColumnHeader } from './data-table/data-table-column-header';

import {
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Button,
  Badge,
} from '@cash-compass/ui';

import { formatDate, getStatusIcon } from './data-table/lib/utils';
import clsx from 'clsx';

export function getColumns(): ColumnDef<RevenueTransation>[] {
  return [
    {
      id: 'select',
      size: 10,
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
        <div className="w-12">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-0.5"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'issue_date',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ISSUE DATE" />
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),
      enableSorting: false,
      enableHiding: true,
      size: 10,
    },
    {
      accessorKey: 'customer_name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CUSTOMER" />
      ),
      cell: ({ row }) => (
        <div className="w-42">{row.getValue('customer_name')}</div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'source_name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="SOURCE" />
      ),
      cell: ({ row }) => (
        <div className="w-42">{row.getValue('source_name')}</div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'amount_total',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="AMOUNT" />
      ),
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue('amount_total'));
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);
        return <div>{formatted}</div>;
      },
      enableHiding: true,
      size: 10,
    },
    {
      accessorKey: 'status',
      enableHiding: true,
      size: 10,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="STATUS" />
      ),
      cell: ({ row }) => {
        const status = row.original.status;
        const Icon = getStatusIcon(status);

        // Define status colors for badges
        const statusColors = {
          invoiced: 'bg-blue-50 text-blue-700 border-blue-200',
          paid: 'bg-green-50 text-green-700 border-green-200',
          overdue: 'bg-red-50 text-red-700 border-red-200',
          expected: 'bg-blue-50 text-blue-700 border-blue-200',
          received: 'bg-green-50 text-green-700 border-green-200',
          sent: 'bg-green-50 text-green-700 border-green-200',
        };
        return (
          <Badge
            variant="outline"
            className={clsx(
              'py-1 [&>svg]:size-3.5 flex items-center gap-1',
              statusColors[
                status.toLowerCase() as RevenueTransation['status']
              ] || 'border-gray-200'
            )}
          >
            <Icon />
            <span className="capitalize">{status}</span>
          </Badge>
        );
      },
      meta: {
        label: 'Status',
        variant: 'multiSelect',
        options: (
          [
            'invoiced',
            'paid',
            'overdue',
            'expected',
            'received',
          ] as RevenueTransation['status'][]
        ).map((status) => ({
          label: status.charAt(0).toUpperCase() + status.slice(1),
          value: status,

          icon: getStatusIcon(status),
        })),
        icon: CircleDashed,
      },
      enableColumnFilter: true,

      // filterFn: (row, id, value) => {
      //   return Array.isArray(value) && value.includes(row.getValue(id));
      // },
    },
    {
      accessorKey: 'invoice_number',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="INVOICE" />
      ),
      cell: ({ row }) => (
        <div className="w-42 text-blue-500 underline">
          {row.getValue('invoice_number')}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      id: 'actions',
      size: 10,

      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ACTIONS" />
      ),
      cell: function Cell({ row }) {
        const menuAction = row.original.actions.menuActions;
        const customAction = row.original.actions.customActions;
        const rowData = row.original;

        return (
          <div className="flex items-center justify-end pr-5">
            {customAction?.map((Action, i) => (
              <Action
                {...rowData}
                key={`${rowData.invoice_id}-action-${i + 1}`}
              />
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open menu"
                  variant="ghost"
                  className="flex size-8 p-0 data-[state=open]:bg-muted"
                >
                  <EllipsisVertical className="size-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {menuAction.map(({ label, action, className, shortcut }) => {
                  return (
                    <DropdownMenuItem
                      key={`${rowData.invoice_id}-${label}`}
                      className={clsx(className)}
                      onSelect={() => action(rowData)}
                    >
                      {label}
                      {shortcut ? (
                        <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                      ) : null}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
}
