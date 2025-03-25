'use client';

import { useState } from 'react';
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@cash-compass/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@cash-compass/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cash-compass/ui/select';
import { Input } from '@cash-compass/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@cash-compass/ui/table';
import { Badge } from '@cash-compass/ui/badge';

export type TransactionStatus =
  | 'Invoiced'
  | 'Paid'
  | 'Approved'
  | 'Overdue'
  | 'Pending';

export type Transaction = {
  id: string;
  date: string;
  type: 'Revenue' | 'Expense';
  description: string;
  category: string;
  amount: number;
  status: TransactionStatus;
  actions: string[];
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'DATE',
    cell: ({ row }) => <div>{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'type',
    header: 'TYPE',
    cell: ({ row }) => {
      const type = row.getValue('type') as string;
      return (
        <Badge
          variant="outline"
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            type === 'Revenue'
              ? 'bg-green-50 text-green-700 border-transparent'
              : 'bg-blue-50 text-blue-700 border-transparent'
          }`}
        >
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION',
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY',
    cell: ({ row }) => <div>{row.getValue('category')}</div>,
  },
  {
    accessorKey: 'amount',
    header: 'AMOUNT',
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;

      let badgeStyle = '';
      switch (status) {
        case 'Invoiced':
          badgeStyle = 'bg-blue-50 text-blue-700 border-transparent';
          break;
        case 'Paid':
          badgeStyle = 'bg-green-50 text-green-700 border-transparent';
          break;
        case 'Approved':
          badgeStyle = 'bg-green-50 text-green-700 border-transparent';
          break;
        case 'Overdue':
          badgeStyle = 'bg-red-50 text-red-700 border-transparent';
          break;
        default:
          badgeStyle = 'bg-gray-50 text-gray-700 border-transparent';
      }

      return (
        <Badge
          variant="outline"
          className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyle}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: 'ACTIONS',
    cell: ({ row }) => {
      const actions = row.original.actions;

      return (
        <div className="flex gap-2 justify-end">
          <Button
            variant="link"
            className="text-blue-600 h-auto p-0 font-medium"
          >
            View
          </Button>
          {actions.includes('Record Payment') && (
            <Button
              variant="link"
              className="text-green-600 h-auto p-0 font-medium"
            >
              Record Payment
            </Button>
          )}
          {actions.includes('Send Reminder') && (
            <Button
              variant="link"
              className="text-red-600 h-auto p-0 font-medium"
            >
              Send Reminder
            </Button>
          )}
        </div>
      );
    },
  },
];

interface TransactionsTableProps {
  data: Transaction[];
}

export function TransactionsTable({ data }: TransactionsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pageSize, setPageSize] = useState(5);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize,
      },
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between pb-4">
        <div className="flex flex-row w-[70%]  items-center gap-2">
          <h2 className="text-xl w-52 font-semibold">Recent Activity</h2>
          <div className="flex w-full items-center gap-2">
            <Input
              placeholder="Filter transactions..."
              value={
                (table.getColumn('description')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('description')
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm h-8"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/transactions" className="text-blue-600 text-sm font-medium">
            View All Transactions
          </a>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b border-t">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="border-b"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Rows per page:</span>
              <Select
                value={pageSize.toString()}
                onValueChange={(value) => {
                  setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder={pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
