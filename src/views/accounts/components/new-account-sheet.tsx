import { useNewAccount } from '../hooks/use-new-account';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { useOpenAccount } from '../hooks/use-open-account';
import { AccountForm } from './account-form';

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  const { isEditOpen, onEditClose, setSelectedAccount, selectedAccount } =
    useOpenAccount();

  function handleClose() {
    onEditClose();
    onClose();
    setSelectedAccount(null);
  }

  return (
    <Sheet open={isOpen || isEditOpen} onOpenChange={handleClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={() => {
            //
          }}
          onClose={handleClose}
          disabled={false}
          defaultValues={{
            name: selectedAccount?.name ?? '',
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
