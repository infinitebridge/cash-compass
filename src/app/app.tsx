import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NuqsAdapter } from 'nuqs/adapters/react';

import SignInPage from '../views/auth/sign-in';
import SignUpPage from '../views/auth/sign-up';

import { ApolloProviderWrapper } from './apollo';
import Layout from './layout';
import Dashboard from '../views/dashboard';
import { RevenueManagement } from '../views/revenue';
import { ExpensesManagement } from '../views/expenses';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ApolloProviderWrapper>
        <Layout />
      </ApolloProviderWrapper>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/revenue',
        element: <RevenueManagement />,
      },
      {
        path: '/expenses',
        element: <ExpensesManagement />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-in/sso-callback',
    element: <AuthenticateWithRedirectCallback />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/sign-up/sso-callback',
    element: <AuthenticateWithRedirectCallback />,
  },
]);

export function App() {
  return (
    <NuqsAdapter>
      <RouterProvider router={router} />
    </NuqsAdapter>
  );
}

export default App;
