import { useSearchParams } from 'react-router-dom';
import { Order_By, useGetProjectsQuery } from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';

export const useGetProjects = () => {
  const [params] = useSearchParams();
  const clientsParams = params.get('client');
  const typePrams = params.get('type');
  const clientsIds = clientsParams?.split('.').map(Number);
  const types = typePrams?.split('.');
  const { businessId } = useBusinessStore();
  const dateSort = params.get('sort')?.split('.')[1];

  const sortAnnotation = dateSort === 'asc' ? Order_By.Asc : Order_By.Desc;

  const { data, loading, refetch } = useGetProjectsQuery({
    variables: {
      where: {
        client_id: {
          _in: clientsIds,
        },
        type: {
          _in: types,
        },
        business_id: {
          _eq: businessId,
        },
      },
      orderBy: [
        {
          created_at: sortAnnotation,
        },
      ],
    },
  });

  return {
    projects: data?.project,
    loadProjects: loading,
    reloadProjects: refetch,
  };
};
