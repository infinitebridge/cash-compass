import { type ColumnDef } from '@tanstack/react-table';
import { Service } from './types';

import {
  Checkbox,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@finbridge-manager-apps/ui';
import { formatDate } from './utils';

import { DataTableColumnHeader } from './data-table/data-table-column-header';
import ServiceActions from './service-actions';

export function getColumns(): ColumnDef<Service>[] {
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
      accessorKey: 'category',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Income category" />
      ),

      enableHiding: true,
    },
    {
      accessorKey: 'rate',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Rate" />
      ),

      enableHiding: true,
    },

    {
      accessorKey: 'billable',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Billable" />
      ),

      cell: ({ row }) => (row.original.billable ? 'Yes' : 'No'),

      enableHiding: true,
    },
    {
      accessorKey: 'auto',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Auto add to projects" />
      ),

      cell: ({ row }) => (row.original.auto ? 'Yes' : 'No'),

      enableHiding: true,
    },
    {
      accessorKey: 'description',
      enableSorting: false,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
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
        return <ServiceActions data={rowData} />;
      },
    },
  ];
}
