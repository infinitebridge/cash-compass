import { useSearchParams } from 'react-router-dom';
import { useGetAccountsQuery } from '../../../graphql';

export const useGetAccounts = () => {
  const [params] = useSearchParams();

  const from = params.get('from');
  const to = params.get('to');

  const {
    data: accounts,
    loading,
    refetch,
  } = useGetAccountsQuery({
    variables: {
      where: {
        created_at: {
          _gte: from ?? undefined,
          _lte: to ?? undefined,
        },
      },
      transactionsAggregateIncomeWhere: {
        type: {
          _eq: 'INCOME',
        },
      },
      transactionsAggregateExpenseWhere: {
        type: {
          _eq: 'EXPENSE',
        },
      },
    },
  });

  return {
    refetch,
    accounts,
    loading,
  };
};
