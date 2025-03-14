import { useSearchParams } from 'react-router-dom';

export const useTransactionFilter = () => {
  const [searchParams] = useSearchParams();
  const transactionType = searchParams.get('transaction') || 'income';
  const accountId = searchParams.get('account') || '';
  const accountsIds = accountId ? accountId.split('.').map(Number) : undefined;

  const categoryId = searchParams.get('category') || '';
  const categoriesIds = categoryId
    ? categoryId.split('.').map(Number)
    : undefined;

  return {
    transactionFilter: {
      type: {
        _eq: transactionType.toUpperCase(),
      },
      account_id: accountsIds
        ? {
            _in: accountsIds,
          }
        : undefined,
      category_id: categoriesIds
        ? {
            _in: categoriesIds,
          }
        : undefined,
    },
  };
};
