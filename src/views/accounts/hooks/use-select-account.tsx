import { useRef, useState } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@finbridge-manager-apps/ui';
import { Select } from '../../../components/select';

export const useSelectAccount = (): [
  () => JSX.Element,
  () => Promise<unknown>
] => {
  // const accountQuery = useGetAccounts();
  // const accountMutation = useCreateAccount();
  // const onCreateAccount = (name: string) => accountMutation.mutate({
  //   name
  // });
  // const accountOptions = (accountQuery.data ?? []).map((account) => ({
  //   label: account.name,
  //   value: account.id,
  // }));

  const accounts = [
    {
      label: 'Cash',
      value: 'acc1',
    },
    {
      label: 'Credit Card',
      value: 'acc2',
    },
    {
      label: 'Debit Card',
      value: 'acc3',
    },
    {
      label: 'Bank Transfer',
      value: 'acc4',
    },
    {
      label: 'Savings Account',
      value: 'acc5',
    },
    {
      label: 'Checking Account',
      value: 'acc6',
    },
    {
      label: 'PayPal',
      value: 'acc7',
    },
    {
      label: 'Investment Account',
      value: 'acc8',
    },
    {
      label: 'Retirement Account',
      value: 'acc9',
    },
    {
      label: 'Business Account',
      value: 'acc10',
    },
  ];

  const [promise, setPromise] = useState<{
    resolve: (value: string | undefined) => void;
  } | null>(null);
  const selectValue = useRef<string>();

  const confirm = () =>
    new Promise((resolve, reject) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(selectValue.current);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(undefined);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <Dialog open={promise !== null}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Account</DialogTitle>
          <DialogDescription>
            Please select an account to continue.
          </DialogDescription>
        </DialogHeader>
        <Select
          placeholder="Select an account"
          options={accounts}
          // onCreate={onCreateAccount}
          onChange={(value: string | undefined) =>
            (selectValue.current = value)
          }
          // disabled={accountQuery.isLoading || accountMutation.isPending}
        />
        <DialogFooter className="pt-2">
          <Button onClick={handleCancel} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return [ConfirmationDialog, confirm];
};
