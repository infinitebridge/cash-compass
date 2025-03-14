import { PencilIcon } from 'lucide-react';

// import { useDeleteAccount } from "@/features/accounts/api/use-delete-account";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { CoreRow } from '@tanstack/react-table';
import { toast } from 'sonner';
import { DeleteAlertDialog } from '../../../components/alert-dialog';
import { useDeleteAccountByPkMutation } from '../../../graphql';
import { useGetAccounts } from '../hooks/use-get-accounts';
import { useOpenAccount } from '../hooks/use-open-account';
import { Account } from './types';

type Props = {
  data: CoreRow<Account>['original'];
};

export const AccountActions = ({ data }: Props) => {
  const [removeAccount] = useDeleteAccountByPkMutation();
  const { refetch } = useGetAccounts();
  const { onEditOpen, setSelectedAccount } = useOpenAccount();

  const handleDelete = async () => {
    toast.loading('Removing Account...', { id: 'account-deletion' });
    removeAccount({
      variables: {
        deleteAccountByPkId: data?.id,
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
    setSelectedAccount({
      id: data?.id,
      name: data?.name,
    });
    onEditOpen();
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
        <DropdownMenuLabel
          onClick={handleEdit}
          className="flex cursor-pointer flex-row items-center gap-2 font-normal"
        >
          <PencilIcon className="h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuLabel>{' '}
        <DeleteAlertDialog
          onDelete={handleDelete}
          title={'Are you sure you want to delete this account ?'}
          description="This action cannot be undone. This will permanently delete this user
          and remove his data from our servers."
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
