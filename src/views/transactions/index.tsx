import { formatDistanceToNow } from 'date-fns';
import { useMemo, useState } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';

import { DataTableSkeleton } from './components/data-table-skeleton';
import { ImportCard } from './components/import-card';
import { TabsSwitcher } from './components/tabs';
import { TransactionDataGrid } from './components/transaction-datagrid';
import Actions from './components/transactions-actions';
import { UploadButton } from './components/upload-button';
import { useGetCountTransactions } from './hooks/use-get-count-transactions';
import { useGetTransactions } from './hooks/use-get-transaction';

enum VARIANTS {
  LIST = 'LIST',
  IMPORT = 'IMPORT',
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {},
};

const TransactionsPage = () => {
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);
  const { transactions, loading } = useGetTransactions();
  const { count, loading: countLoading } = useGetCountTransactions();
  const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    setImportResults(results);
    setVariant(VARIANTS.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.LIST);
  };

  const rows = useMemo(
    () =>
      transactions?.transaction.map((trs) => ({
        id: trs.id,
        account: trs.account?.name,
        accountId: trs.account?.id,
        category: trs.category_transaction?.name,
        categoryId: trs.category_transaction?.id,
        amount: trs.amount,
        note: trs.note,
        payeeId: trs.payee?.id,
        payee: trs.payee
          ? `${trs.payee.first_name} ${trs.payee.last_name}`
          : '',
        payeeCompany: trs.payee?.company?.name,
        payeeCompanyId: trs.payee?.company?.id,
        readableDate: trs.date ? formatDistanceToNow(new Date(trs.date)) : '',
        date: trs.date,
      })) ?? [],
    [transactions?.transaction]
  );
  if (variant === VARIANTS.IMPORT) {
    return (
      <ImportCard
        data={importResults.data}
        onCancel={onCancelImport}
        onSubmit={() => {
          //
        }}
      />
    );
  }

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Transaction History
          </CardTitle>
          <div className="flex flex-col items-center gap-x-2 gap-y-2 lg:flex-row">
            <Actions />
            <UploadButton onUpload={onUpload} />
          </div>
        </CardHeader>
        <CardContent>
          <TabsSwitcher />
          <div className="mx-auto w-full max-w-screen-2xl py-4">
            {loading || countLoading ? (
              <DataTableSkeleton
                columnCount={5}
                searchableColumnCount={1}
                filterableColumnCount={2}
                rowCount={5}
                cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem']}
                shrinkZero
              />
            ) : (
              <TransactionDataGrid count={count} data={rows} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
