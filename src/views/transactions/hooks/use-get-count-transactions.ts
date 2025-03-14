import { useSearchParams } from 'react-router-dom';
import { useGetCountTransactionsQuery } from '../../../graphql';

export const useGetCountTransactions = () => {
  const [params] = useSearchParams();
  const from = params.get('from');
  const per_page = params.get('per_page');
  const page = params.get('page');
  const to = params.get('to');
  const categroyFilter = params.get('category_transaction');
  const accountFilter = params.get('account');

  const selectedCategory = categroyFilter?.split('~')[0];
  const selectedAccount = accountFilter?.split('~')[0];
  const transactionType = params.get('transaction');

  const { data: countTransactions, loading } = useGetCountTransactionsQuery({
    variables: {
      where: {
        created_at: {
          _gte: from ?? undefined,
          _lte: to ?? undefined,
        },
        type: {
          _eq: transactionType?.toUpperCase(),
        },
        _or: [
          {
            category_transaction: {
              name: {
                _eq: selectedCategory,
              },
            },
            account: {
              name: {
                _eq: selectedAccount,
              },
            },
          },
        ],
      },
      limit: per_page ? ~~per_page : undefined,
      offset: (~~(page ?? 0) - 1) * (per_page ? ~~per_page : 0),
    },
  });

  return {
    count: countTransactions?.transaction_aggregate.aggregate?.count ?? 0,
    loading,
  };
};
