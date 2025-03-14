import { Button } from '@finbridge-manager-apps/ui';
import { DownloadIcon } from '@radix-ui/react-icons';
import { type Table } from '@tanstack/react-table';
import { toast } from 'sonner';
import { BulkDeleteAlertDialog } from '../../../components/bulk-delete-alert';
import { useDeleteTransactionsByIdsMutation } from '../../../graphql';
import { useGetTransactions } from '../hooks/use-get-transaction';
import { Transaction } from './types';

interface TasksTableToolbarActionsProps {
  table: Table<Transaction>;
}

export function TasksTableToolbarActions({
  table,
}: TasksTableToolbarActionsProps) {
  const [removeSelectedRows] = useDeleteTransactionsByIdsMutation();
  const { refetch } = useGetTransactions();
  const selectedRows = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => row.original.id);

  function handleDeleteMultiRows() {
    toast.loading('Deleting selected rows...', { id: 'delete-multi' });

    removeSelectedRows({
      variables: {
        where: {
          id: {
            _in: selectedRows,
          },
        },
      },
      onCompleted: () => {
        toast.dismiss('delete-multi');
        toast.success('All selected rows have been removed');
        table.toggleAllRowsSelected(false);
        refetch();
      },
      onError: (err) => {
        toast.dismiss('delete-multi');
        toast.error(err.message);
      },
    });
  }

  return (
    <div className="flex items-center gap-2">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <BulkDeleteAlertDialog
          title="Are you sure ?"
          description="This action cannot be undone. This will permanently delete this user
        and remove his data from our servers."
          onDelete={handleDeleteMultiRows}
        />
      ) : null}
      {/* <CreateTaskDialog /> */}
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
        onClick={
          () => {
            //
          }
          // exportTableToCSV(table, {
          //   filename: "tasks",
          //   excludeColumns: ["select", "actions"],
          // })
        }
      >
        <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
        Export
      </Button>
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  );
}
