import { Transaction, TransactionStatus } from './types';

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
} from '@cash-compass/ui';

import { formatDate, getStatusIcon } from './data-table/lib/utils';
import clsx from 'clsx';
import { StatusBadge } from '@cash-compass/blocks';

export function getColumns(): ColumnDef<Transaction>[] {
  return [
    {
      id: 'select',
      size: 4,
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
      accessorKey: 'date',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="DATE" />
      ),
      cell: ({ cell }) => {
        return formatDate(cell.getValue() as Date, {
          month: 'numeric',
          day: '2-digit',
          year: 'numeric',
        });
      },
      enableSorting: false,
      enableHiding: true,
      size: 10,
    },
    {
      accessorKey: 'type',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="TYPE" />
      ),
      cell: ({ row }) => {
        const type = row.getValue('type') as 'revenue' | 'expense';
        return (
          <div
            className={clsx(
              'py-1 px-2 rounded-full text-xs font-medium inline-flex items-center',
              type === 'revenue'
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            )}
          >
            <span className="capitalize">{type}</span>
          </div>
        );
      },
      enableSorting: true,
      enableHiding: true,
      size: 10,
      meta: {
        label: 'Type',
        variant: 'multiSelect',
        options: ['revenue', 'expense'].map((type) => ({
          label: type.charAt(0).toUpperCase() + type.slice(1),
          value: type,
        })),
      },
      enableColumnFilter: true,
    },
    {
      accessorKey: 'description',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="DESCRIPTION" />
      ),
      cell: ({ row }) => (
        <div className="w-42 truncate">{row.getValue('description')}</div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'category',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CATEGORY" />
      ),
      cell: ({ row }) => <div className="w-42">{row.getValue('category')}</div>,
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'amount',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="AMOUNT" />
      ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('amount'));
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

        return (
          <StatusBadge
            status={status}
            icon={Icon}
            showIcon={true}
            capitalize={true}
          />
        );
      },
      meta: {
        label: 'Status',
        variant: 'multiSelect',
        options: (
          [
            'invoiced',
            'paid',
            'approved',
            'pending',
            'rejected',
            'overdue',
            'draft',
            'expected',
            'sent',
            'received',
          ] as TransactionStatus[]
        ).map((status) => ({
          label: status.charAt(0).toUpperCase() + status.slice(1),
          value: status,
          icon: getStatusIcon(status),
        })),
        icon: CircleDashed,
      },
      enableColumnFilter: true,
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
              <Action key={`${rowData.id}-action-${i + 1}`} {...rowData} />
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
                      key={`${rowData.id}-${label}`}
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
