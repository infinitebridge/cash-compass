import { useSearchParams } from 'react-router-dom';
import { useGetCategoryTransactionQuery } from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useNewTransaction } from '../../transactions/hooks/use-new-transaction';

export const useGetCategories = () => {
  const [params] = useSearchParams();

  const from = params.get('from');
  const to = params.get('to');
  const categoryTab = params.get('category') ?? 'income';
  const { transactionType } = useNewTransaction();
  const { businessId } = useBusinessStore();

  const { data, loading, refetch } = useGetCategoryTransactionQuery({
    variables: {
      where: {
        created_at: {
          _gte: from ?? undefined,
          _lte: to ?? undefined,
        },
        type: {
          _eq: categoryTab?.toUpperCase() ?? transactionType.toUpperCase(),
        },
        business_id: {
          _eq: businessId,
        },
      },
    },
  });

  return {
    categories: data,
    loading,
    refetch,
  };
};
