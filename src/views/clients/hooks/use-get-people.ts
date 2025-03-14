import { useSearchParams } from 'react-router-dom';
import { useGetPeopleQuery } from '../../../graphql';

export const useGetPeople = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const { data, loading, refetch } = useGetPeopleQuery();

  return {
    people: data?.person,
    peopleLoading: loading,
    refetch,
  };
};
