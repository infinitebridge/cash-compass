import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '@clerk/clerk-react';
import { ReactNode, useMemo } from 'react';
import { GRAPHQL_API } from '../../lib/urls';

export const ApolloProviderWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { getToken } = useAuth();
  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken({ template: 'hasura' });
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const httpLink = new HttpLink({
      uri: GRAPHQL_API,
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });
  }, [getToken]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
