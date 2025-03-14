import { useGetCategoryTransactionQuery } from '../../../graphql';
import { useTransactionFilter } from './use-transaction-filter';

export const useGetCategories = () => {
  const { transactionFilter } = useTransactionFilter();

  const { data, loading, ...rest } = useGetCategoryTransactionQuery({
    variables: {
      transactionsAggregateWhere2: {
        ...transactionFilter,
      },
    },
  });
  return {
    data: data?.category_transaction,
    loading,
    ...rest,
  };
};
