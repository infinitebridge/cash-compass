import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@finbridge-manager-apps/ui';
import { BoxIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNewCompany } from '../hooks/use-new-conpany';
import { useNewPerson } from '../hooks/use-new-person';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterKey: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterKey,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const { onOpen } = useNewCompany();
  const { onNewPersonSheetOpen } = useNewPerson();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      rowSelection,
      columnFilters,
    },
  });
  const [queryParams, setQueryParams] = useSearchParams();
  const initialTab = queryParams.get('client') || 'companies';

  const handleTabChange = (value: string) => {
    queryParams.set('client', value);
    setQueryParams(queryParams);
  };

  return (
    <>
      <div className="mb-10 flex flex-row items-center justify-between">
        <Tabs
          defaultValue={initialTab}
          onValueChange={handleTabChange}
          className="w-[400px]"
        >
          <TabsList defaultChecked defaultValue={initialTab}>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex flex-row items-center gap-2">
          <Input
            placeholder={`Filter ${filterKey}`}
            value={
              (table.getColumn(filterKey)?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn(filterKey)?.setFilterValue(event.target.value)
            }
            className="w-96"
          />
          <Button
            onClick={initialTab === 'companies' ? onOpen : onNewPersonSheetOpen}
            className="flex flex-row items-center gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            <span>
              {initialTab === 'companies' ? 'Add Company' : 'Add person'}
            </span>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                <TableCell colSpan={10} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <BoxIcon className="h-10 w-10 text-gray-500" />
                    <h3 className="font-semibold">No data to display</h3>
                    <p className="text-muted-foreground">
                      Add some data to get started.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
}
