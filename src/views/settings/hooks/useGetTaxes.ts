import { useGetTaxByBusinessIdQuery } from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';

export const useGetTaxes = () => {
  const { businessId } = useBusinessStore();

  const { data, loading, refetch } = useGetTaxByBusinessIdQuery({
    variables: {
      where: {
        business_id: {
          _eq: Number(businessId),
        },
      },
    },
  });

  return {
    taxes: data?.tax,
    loadTaxes: loading,
    reloadTaxes: refetch,
  };
};
