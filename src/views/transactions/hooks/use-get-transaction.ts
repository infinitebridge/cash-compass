import { useSearchParams } from 'react-router-dom';
import { Order_By, useGetTransactionsQuery } from '../../../graphql';

export const useGetTransactions = () => {
  const [params] = useSearchParams();
  const from = params.get('from');
  const per_page = params.get('per_page');
  const page = params.get('page');
  const to = params.get('to');

  const accountFilter = params.get('account');
  const categoryFilter = params.get('category');
  const transactionType = params.get('transaction') ?? 'income';
  const sort = params.get('sort')?.split('.')[1];

  const sortingParam = sort === 'asc' ? Order_By.Asc : Order_By.Desc;

  const {
    data: transactions,
    loading,
    refetch,
  } = useGetTransactionsQuery({
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
            account_id: {
              _in: accountFilter?.split('.').map(Number),
            },
            category_id: {
              _in: categoryFilter?.split('.').map(Number),
            },
          },
        ],
      },
      orderBy: [
        {
          created_at: sortingParam,
        },
        {
          amount: sortingParam,
        },
      ],
      limit: per_page ? ~~per_page : undefined,
      offset: (~~(page ?? 0) - 1) * (per_page ? ~~per_page : 0),
    },
  });

  return {
    refetch,
    transactions,
    loading,
  };
};
