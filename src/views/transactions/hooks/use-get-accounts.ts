import { useGetAccountsQuery } from '../../../graphql';
import { useTransactionFilter } from './use-transaction-filter';

export const useGetAccounts = () => {
  const { transactionFilter } = useTransactionFilter();

  const { data, loading, ...rest } = useGetAccountsQuery({
    variables: {
      transactionsAggregateTypeWhere: {
        ...transactionFilter,
      },
    },
  });

  return {
    data: data?.account,
    loading,
    ...rest,
  };
};
