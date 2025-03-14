import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { CoreRow } from '@tanstack/react-table';
import { toast } from 'sonner';
import { useDeleteTransactionByPkMutation } from '../../../graphql';
import { useGetTransactions } from '../hooks/use-get-transaction';
import { useNewTransaction } from '../hooks/use-new-transaction';
import { useOpenTransaction } from '../hooks/use-open-transaction';
import { Transaction } from './types';

type Props = {
  data: CoreRow<Transaction>['original'];
};

const TransactionActions = ({ data }: Props) => {
  const { onEditOpen } = useNewTransaction();
  const { setSelectedTransaction } = useOpenTransaction();
  const [deleteTransaction] = useDeleteTransactionByPkMutation();
  const { refetch } = useGetTransactions();

  function getTransactionData() {
    setSelectedTransaction({
      id: data?.id,
      date: data?.date,
      amount: data?.amount.toString() ?? '',
      accountId: data?.accountId ?? 0,
      categoryId: data?.categoryId ?? 0,
      payeeId: data.payeeId ?? 0,
      notes: data.note,
    });
    onEditOpen(data?.id);
  }

  const onDelete = () => {
    toast.loading('Deleting transaction', { id: 'delete' });

    deleteTransaction({
      variables: {
        deleteTransactionByPkId: data?.id,
      },
      onCompleted: () => {
        toast.dismiss('delete');
        toast.success('Transaction deleted');
        refetch();
      },
      onError: (err) => {
        toast.dismiss('delete');
        toast.error(err.message);
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="data-[state=open]:bg-muted flex size-8 p-0"
        >
          <DotsHorizontalIcon className="size-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={getTransactionData}>Edit</DropdownMenuItem>
        <DropdownMenuItem
          onClick={onDelete}
          className="text-red-500 hover:bg-red-200 hover:text-red-500"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TransactionActions;
