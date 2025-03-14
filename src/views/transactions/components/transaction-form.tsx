import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Textarea,
} from '@finbridge-manager-apps/ui';
import { parseISO } from 'date-fns';
import { useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import { DatePicker } from '../../../components/date-picker';
import { Select } from '../../../components/select';
import {
  useDeleteTransactionByPkMutation,
  useInsertTransactionMutation,
  useUpdateTransactionByPkMutation,
} from '../../../graphql';
import { useGetPeople } from '../../clients/hooks/use-get-people';
import { AmountInput } from '../components/amount-input';
import { useGetTransactions } from '../hooks/use-get-transaction';
import { useNewTransaction } from '../hooks/use-new-transaction';
import { useOpenTransaction } from '../hooks/use-open-transaction';

const formSchema = z.object({
  date: z.coerce.date(),
  accountId: z.string(),
  categoryId: z.string().nullable().optional(),
  payee: z.string(),
  amount: z.string(),
  notes: z.string().nullable().optional(),
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  disabled?: boolean;
  accountOptions: { label: string; value: string }[];
  categoryOptions: { label: string; value: string }[];
  onCreateAccount: (name: string) => void;
  onCreateCategory: (name: string) => void;
  onClose: () => void;
};

export const TransactionForm = ({
  disabled,
  accountOptions,
  categoryOptions,
  onCreateAccount,
  onCreateCategory,
  onClose,
}: Props) => {
  const { transactionType, onPersonCreationOpen } = useNewTransaction();
  const { selectedTransaction } = useOpenTransaction();
  const { people } = useGetPeople();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [createTransaction] = useInsertTransactionMutation();
  const [updateTransaction] = useUpdateTransactionByPkMutation();
  const [deleteTransaction] = useDeleteTransactionByPkMutation();

  const { refetch } = useGetTransactions();

  const handleSubmit = (values: FormValues) => {
    const parsedAmount = parseFloat(values.amount);
    if (selectedTransaction?.id) {
      toast.loading('Transaction update in progress...', {
        id: 'edit-transaction',
      });
      updateTransaction({
        variables: {
          pkColumns: {
            id: selectedTransaction?.id,
          },
          set: {
            date: values.date,
            account_id: Number(values.accountId),
            category_id: Number(values.categoryId),
            payee_id: Number(values.payee),
            amount: parsedAmount,
            note: values.notes,
          },
        },
        onCompleted: () => {
          toast.dismiss('edit-transaction');
          toast.success('Transacation updated successfully');
          onClose();
          refetch();
        },
      });
    } else {
      toast.loading('Transaction creation in progress...', {
        id: 'new-transaction',
      });
      createTransaction({
        variables: {
          object: {
            date: values.date,
            account_id: Number(values.accountId),
            category_id: Number(values.categoryId),
            amount: parsedAmount,
            payee_id: Number(values.payee),
            note: values.notes,
            type: transactionType,
          },
        },
        onCompleted: () => {
          toast.dismiss('new-transaction');
          toast.success('Transacation added successfully');
          onClose();
          refetch();
        },
      });
    }
  };

  const handleDelete = () => {
    toast.loading('Deleting Transaction...', { id: 'delete' });

    deleteTransaction({
      variables: {
        deleteTransactionByPkId: Number(selectedTransaction?.id),
      },
      onCompleted: () => {
        toast.dismiss('delete');
        toast.success('Transaction deleted successfully');
        onClose();
        refetch();
      },
      onError: (err) => {
        toast.dismiss('delete');
        toast.error(err.message);
      },
    });
  };

  const payeeOptions = useMemo(() => {
    return people?.map((person) => {
      return {
        value: person?.id.toString(),
        label: `${person?.first_name} ${person?.last_name}`,
      };
    });
  }, [people]);

  useEffect(() => {
    if (selectedTransaction) {
      form.reset({
        date: parseISO(selectedTransaction.date),
        accountId: selectedTransaction.accountId.toString(),
        categoryId: selectedTransaction.categoryId.toString(),
        payee: selectedTransaction.payeeId.toString(),
        amount: selectedTransaction.amount,
        notes: selectedTransaction.notes,
      });
    }
  }, [form, selectedTransaction]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="accountId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account</FormLabel>
              <FormControl>
                <Select
                  placeholder="Select an account"
                  options={accountOptions}
                  onCreate={onCreateAccount}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="categoryId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  placeholder="Select a category"
                  options={categoryOptions}
                  onCreate={onCreateCategory}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="payee"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payee</FormLabel>
              <FormControl>
                <Select
                  placeholder="Select a payee"
                  options={payeeOptions}
                  onCreate={() => {
                    onPersonCreationOpen(true);
                  }}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="amount"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <AmountInput
                  {...field}
                  disabled={disabled}
                  placeholder="0.00"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="notes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value ?? ''}
                  disabled={disabled}
                  placeholder="Optional notes"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full">
          {selectedTransaction?.id ? 'Save changes' : 'Create transaction'}
        </Button>
        {!!selectedTransaction?.id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full border border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500"
            variant="outline"
          >
            <Trash className="mr-2 size-4" />
            Delete transaction
          </Button>
        )}
      </form>
    </Form>
  );
};
