import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';

import { formatDistanceToNow } from 'date-fns';
import { PlusIcon } from 'lucide-react';
import { useMemo } from 'react';
import { AccountDataGrid } from './components/accounts-datagrid';
import { DataTableSkeleton } from './components/data-table/data-table-skeleton';
import { useGetAccounts } from './hooks/use-get-accounts';
import { useNewAccount } from './hooks/use-new-account';

const AccountsPage = () => {
  const { accounts, loading } = useGetAccounts();
  const { onOpen } = useNewAccount();

  const rows = useMemo(
    () =>
      accounts?.account.map((acc) => ({
        id: acc.id,
        name: acc.name,
        date: acc.created_at,
        total_income:
          acc.transaction_aggregate_income.aggregate?.sum?.amount ?? 0,
        total_expense:
          acc.transaction_aggregate_expense.aggregate?.sum?.amount ?? 0,
        readableDate: acc.created_at
          ? formatDistanceToNow(new Date(acc.created_at))
          : '',
      })) ?? [],
    [accounts]
  );

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="line-clamp-1 text-xl">Account Page</CardTitle>
          <Button className="flex flex-row gap-2" size={'sm'} onClick={onOpen}>
            <PlusIcon className="h-5 w-5" />
            Create New
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mx-auto w-full max-w-screen-2xl py-4">
            {loading ? (
              <DataTableSkeleton
                columnCount={5}
                searchableColumnCount={1}
                filterableColumnCount={2}
                rowCount={5}
                cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem']}
                shrinkZero
              />
            ) : (
              <AccountDataGrid count={0} data={rows} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
