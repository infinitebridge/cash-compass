import { Invoice } from './types';
import type { DataTableRowAction } from './types';
import type { ColumnDef } from '@tanstack/react-table';
import { CircleDashed, Ellipsis } from 'lucide-react';
import * as React from 'react';

import { DataTableColumnHeader } from './data-table/data-table-column-header';

import {
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Button,
  Badge,
} from '@cash-compass/ui';

import { formatDate, getStatusIcon } from './data-table/lib/utils';

interface GetColumnsProps {
  setRowAction: React.Dispatch<
    React.SetStateAction<DataTableRowAction<Invoice> | null>
  >;
}

export function getColumns({
  setRowAction,
}: GetColumnsProps): ColumnDef<Invoice>[] {
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
      accessorKey: 'due_date',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="DUE DATE" />
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),
      enableHiding: true,
      size: 10,
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
      accessorKey: 'balance_remaining',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="BALANCE" />
      ),
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue('balance_remaining'));
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
        const status = (
          [
            'Sent',
            'Paid',
            'Overdue',
            'Draft',
            'Cancelled',
          ] as Invoice['status'][]
        ).find((status) => status === row.original.status);

        if (!status) return null;

        const Icon = getStatusIcon(row.original.status);

        return (
          <Badge variant="outline" className="py-1 [&>svg]:size-3.5">
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
            'Sent',
            'Paid',
            'Overdue',
            'Draft',
            'Cancelled',
          ] as Invoice['status'][]
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
      id: 'actions',
      size: 10,

      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ACTIONS" />
      ),
      cell: function Cell({ row }) {
        // const [isUpdatePending, startUpdateTransition] = React.useTransition();

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: 'update' })}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: 'delete' })}
              >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
}
