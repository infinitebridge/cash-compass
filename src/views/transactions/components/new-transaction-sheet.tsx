import { TransactionForm } from '../components/transaction-form';
import { useNewTransaction } from '../hooks/use-new-transaction';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { useMemo } from 'react';
import { toast } from 'sonner';
import { useInsertCategoryMutation } from '../../../graphql';
import { useGetAccounts } from '../../accounts/hooks/use-get-accounts';
import { useGetCategories } from '../../categories/hooks/use-get-categories';
import { useOpenTransaction } from '../hooks/use-open-transaction';

export const NewTransactionSheet = () => {
  const { isOpenNew, onCloseNew } = useNewTransaction();
  const { isEditOpen, onEditClose, setSelectedTransaction } =
    useOpenTransaction();
  const { categories } = useGetCategories();
  const { accounts } = useGetAccounts();
  const { transactionType } = useNewTransaction();

  const [addCategory] = useInsertCategoryMutation();
  const { refetch: reloadCategories } = useGetCategories();

  function createCategory(value: string) {
    toast.loading(`Adding ${value} category`, { id: 'new-category' });
    addCategory({
      variables: {
        object: {
          name: value,
          type: transactionType,
        },
      },
      onCompleted: () => {
        toast.dismiss('new-category');
        toast.success('category added');
        reloadCategories();
      },
      onError: (err) => {
        toast.dismiss('new-category');
        toast.error(err.message);
      },
    });
  }

  const formattedCategories = useMemo(() => {
    return (
      categories?.category_transaction.map((category) => {
        return {
          value: category.id.toString(),
          label: category.name,
        };
      }) ?? []
    );
  }, [categories]);

  const formattedAccounts = useMemo(() => {
    return (
      accounts?.account.map((account) => {
        return {
          value: account.id.toString(),
          label: account.name,
        };
      }) ?? []
    );
  }, [accounts]);

  const handleClose = () => {
    onCloseNew();
    onEditClose();
    setSelectedTransaction(null);
  };

  return (
    <Sheet open={isOpenNew || isEditOpen} onOpenChange={handleClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>Add a new transaction</SheetDescription>
        </SheetHeader>

        <TransactionForm
          disabled={false}
          categoryOptions={formattedCategories}
          onCreateCategory={(val) => {
            createCategory(val);
          }}
          onClose={handleClose}
          accountOptions={formattedAccounts}
          onCreateAccount={() => {
            //
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
