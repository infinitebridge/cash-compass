import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@finbridge-manager-apps/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import {
  AccountFragmentFragmentDoc,
  useInsertAccountMutation,
  useUpdateAccountByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useGetAccounts } from '../hooks/use-get-accounts';
import { useOpenAccount } from '../hooks/use-open-account';

const formSchema = z.object({
  name: z.string(),
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
  onClose: () => void;
};

export const AccountForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
  onClose,
}: Props) => {
  const { selectedAccount } = useOpenAccount();
  const { businessId } = useBusinessStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedAccount?.name ?? '',
    },
  });

  const [createAccount] = useInsertAccountMutation();
  const [updateAccount] = useUpdateAccountByPkMutation();
  const { refetch } = useGetAccounts();
  const handleSubmit = (values: FormValues) => {
    if (selectedAccount?.id) {
      toast.loading('Account update in progress', { id: 'account-edit' });
      updateAccount({
        variables: {
          pkColumns: {
            id: selectedAccount?.id,
          },
          set: {
            name: values.name,
          },
        },

        update: (cache, { data }, { variables }) => {
          cache.updateFragment(
            {
              fragment: AccountFragmentFragmentDoc,
              id: cache.identify({
                __ref: `${data?.update_account_by_pk?.__typename}:${data?.update_account_by_pk?.id}`,
              }),
            },
            (previous) => {
              return {
                ...previous,
                name: variables?.set?.name,
              };
            }
          );
        },
        onCompleted: () => {
          onClose();
          toast.dismiss('account-edit');
          toast.success('account updated');
          // refetch();
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('Account creation in progress', { id: 'account-creation' });
      createAccount({
        variables: {
          object: {
            name: values.name,
            business_id: businessId,
          },
        },

        onCompleted: () => {
          onClose();
          toast.dismiss('account-creation');
          toast.success('account created');
          refetch();
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    }
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="e.g. Cash, Bank, Credit Card"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="my-10 flex items-center space-x-2">
          <Checkbox id="default" />
          <label
            htmlFor="default"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Set this account as default
          </label>
        </div>
        <Button className="w-full" disabled={disabled}>
          {selectedAccount?.id ? 'Save changes' : 'Create account'}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full"
            variant="outline"
          >
            <Trash className="mr-2 size-4" />
            Delete account
          </Button>
        )}
      </form>
    </Form>
  );
};
