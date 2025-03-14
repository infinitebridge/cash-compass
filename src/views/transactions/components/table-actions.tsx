import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import {
  GetTransactionsQuery,
  useDeleteTransactionByPkMutation,
} from '../../../graphql';
import { useGetTransactions } from '../hooks/use-get-transaction';
import { useOpenTransaction } from '../hooks/use-open-transaction';

type Props = {
  rowId: number;
  data: Omit<GetTransactionsQuery['transaction'], '__typename'>[0];
};

const TableActions = ({ rowId, data }: Props) => {
  const [removeTransactions] = useDeleteTransactionByPkMutation();
  const { refetch } = useGetTransactions();
  const { setSelectedTransaction, onOpenEdit } = useOpenTransaction();

  const handleDelete = async () => {
    toast.loading('Removing Account...', { id: 'account-deletion' });
    removeTransactions({
      variables: {
        deleteTransactionByPkId: rowId,
      },
      onCompleted: () => {
        toast.dismiss('account-deletion');
        toast.success('Account deleted');
        refetch();
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  const handleEdit = () => {
    if (data && data?.category_transaction) {
      setSelectedTransaction({
        id: data.id,
        date: data?.date,
        accountId: data?.account?.id ?? 1,
        amount: data?.amount,
        categoryId: data?.category_transaction.id ?? 1,
        payeeId: data?.payee?.id ?? 1,
        notes: data.note ?? '',
      });
      onOpenEdit(rowId.toString());
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
        // onClick={() => navigator.clipboard.writeText(payment.id)}
        >
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableActions;
