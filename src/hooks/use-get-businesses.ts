import { useGetBusinessesQuery } from '../graphql';

export const useGetBusinesses = () => {
  const { data, loading, refetch } = useGetBusinessesQuery();

  return {
    businesses: data?.business,
    loadBusinesses: loading,
    reloadBusinesses: refetch,
  };
};
