import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignInPage from '../views/auth/sign-in';
import SignUpPage from '../views/auth/sign-up';

import { ApolloProviderWrapper } from './apollo';
import Layout from './layout';

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
        element: <div>home view</div>,
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
  return <RouterProvider router={router} />;
}

export default App;
