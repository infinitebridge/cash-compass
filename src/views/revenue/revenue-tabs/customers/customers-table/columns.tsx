import { Customer } from './types';

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
import { StatusBadge } from '@cash-compass/blocks';

import { formatDate, getStatusIcon } from './data-table/lib/utils';
import clsx from 'clsx';

export function getColumns(): ColumnDef<Customer>[] {
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
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CUSTOMER" />
      ),
      cell: ({ row }) => {
        console.log(row.getValue('name'));
        return (
          <div className="w-42">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-blue-200 text-blue-600 font-bold flex items-center justify-center">
                <span> {row.original.name.at(0)}</span>
              </div>
              <div className="flex flex-col">
                <div
                  className="font-medium truncate"
                  title={row.getValue('name')}
                >
                  {row.getValue('name')}
                </div>
                <div className="text-xs text-gray-500">{row.original.type}</div>
              </div>
            </div>
          </div>
        );
      },
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: 'contactPerson',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CONTACT" />
      ),
      cell: ({ row }) => (
        <div className="w-42">
          <div className="flex flex-col">{row.getValue('contactPerson')}</div>
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },

    {
      accessorKey: 'revenueYTD',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="REVENUE YTD" />
      ),
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue('revenueYTD'));
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
      accessorKey: 'lastTransaction',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="LAST TRANSACTION" />
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),

      enableSorting: false,
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
          ['Active', 'Inactive', 'At Risk', 'New'] as Customer['status'][]
        ).find((status) => status === row.original.status);

        if (!status) return null;

        const Icon = getStatusIcon(row.original.status);

        return (
          <StatusBadge
            status={status.toLowerCase() as any}
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
          ['Active', 'Inactive', 'At Risk', 'New'] as Customer['status'][]
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
        const menuAction = row.original.actions?.menuActions;
        const customAction = row.original.actions?.customActions;
        const rowData = row.original;

        return (
          <div className="flex items-center justify-end pr-5">
            {customAction?.map((Action, i) => (
              <Action {...rowData} key={`${rowData.id}-action-${i + 1}`} />
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
                {menuAction?.map(({ label, action, className, shortcut }) => {
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
