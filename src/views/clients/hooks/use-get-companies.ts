import { useSearchParams } from 'react-router-dom';
import { useGetCompaniesQuery } from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';

export const useGetCompanies = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const { businessId } = useBusinessStore();

  const { data, loading, refetch } = useGetCompaniesQuery({
    variables: {
      where: {
        business_id: {
          _eq: businessId,
        },
      },
    },
  });

  return {
    companies: data?.company,
    companiesLoading: loading,
    refetch,
  };
};
