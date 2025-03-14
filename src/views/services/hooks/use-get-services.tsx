import { useSearchParams } from 'react-router-dom';
import { Order_By, useGetServicesQuery } from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';

export const useGetServices = () => {
  const [params] = useSearchParams();
  const { businessId } = useBusinessStore();
  const sort = params.get('sort')?.split('.')[1];

  const categoryId = params.get('category') || '';
  const categoriesIds = categoryId
    ? categoryId.split('.').map(Number)
    : undefined;

  const billableValue = params.get('billable');
  const billableParams = billableValue
    ? billableValue.split('.').map((value) => value === 'true')
    : [];

  const autoAddValue = params.get('auto');
  const autoAddArray = autoAddValue
    ? autoAddValue.split('.').map((value) => value === 'true')
    : [];

  const sortingVar = sort === 'asc' ? Order_By.Asc : Order_By.Desc;
  const { data, loading, refetch } = useGetServicesQuery({
    variables: {
      orderBy: [
        {
          created_at: sortingVar,
        },

        {
          rate: sortingVar,
        },
      ],

      where: {
        income_category_id: categoriesIds?.length
          ? {
              _in: categoriesIds,
            }
          : undefined,
        billable: billableParams.length
          ? {
              _in: billableParams.slice(0),
            }
          : undefined,
        auto_add: autoAddArray.length
          ? {
              _in: autoAddArray.slice(0),
            }
          : undefined,
        business_id: {
          _eq: businessId,
        },
      },
    },
  });

  return {
    services: data?.service,
    loadServices: loading,
    reloadServices: refetch,
  };
};
