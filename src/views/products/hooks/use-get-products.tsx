import { useSearchParams } from 'react-router-dom';
import { Order_By, useGetProductsQuery } from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';

export const useGetProducts = () => {
  const [params] = useSearchParams();

  const sort = params.get('sort')?.split('.')[1];
  const categoryId = params.get('category') || '';
  const categoriesIds = categoryId
    ? categoryId.split('.').map(Number)
    : undefined;
  const { businessId } = useBusinessStore();
  const sortingVar = sort === 'asc' ? Order_By.Asc : Order_By.Desc;

  const { data, loading, refetch } = useGetProductsQuery({
    variables: {
      orderBy: [
        {
          created_at: sortingVar,
        },
        {
          initial_stock: sortingVar,
        },
        {
          rate: sortingVar,
        },
      ],
      where: {
        income_category_id: categoriesIds
          ? {
              _in: categoriesIds,
            }
          : undefined,
        business_id: {
          _eq: businessId,
        },
      },
    },
  });

  return {
    products: data?.product,
    loadProducts: loading,
    reloadProducts: refetch,
  };
};
