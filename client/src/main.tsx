import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { GRAPHQL_URI } from './utils/config';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import WelcomePage from './routes/WelcomePage/WelcomePage';
import LoginRoute from './routes/LoginRoute/LoginRoute';
import SignUpRoute from './routes/SignUpRoute';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import LoginProvider from './context/login-context';
import Dashboard from './routes/Dashboard/Dashboard';
import Root from './routes/Root/Root';
import Homepage from './routes/HomePage/Homepage';
import { Suspense } from 'react';
import { lazy } from 'react';
import SuspenseFallback from './components/SuspenseFallback/SuspenseFallback';

// suspense
const Movies = lazy(() => import('./routes/Movies'));
const TVShows = lazy(() => import('./routes/TVShows'));
const Bookmarked = lazy(() => import('./routes/Bookmarked/Bookmarked'));

const httpLink = createHttpLink({
  uri: GRAPHQL_URI as string,
});

export const authLink = setContext((_, { headers }: Response) => {
  const token = localStorage.getItem('ent-token');
  const parsedToken = token ? (JSON.parse(token) as string) : '';
  return {
    headers: {
      ...headers,
      Authorization: token ? `bearer ${parsedToken}` : 'hello',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/welcome',
        element: <WelcomePage />,
      },
      {
        path: '/login',
        element: <LoginRoute />,
      },
      { path: '/sign-up', element: <SignUpRoute /> },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            children: [
              {
                index: true,
                element: <Homepage />,
              },
              {
                path: '/dashboard/movies',
                element: (
                  <Suspense fallback={<SuspenseFallback />}>
                    <Movies />
                  </Suspense>
                ),
              },
              {
                path: '/dashboard/shows',
                element: (
                  <Suspense fallback={<SuspenseFallback />}>
                    <TVShows />
                  </Suspense>
                ),
              },
              {
                path: '/dashboard/my-stuff',
                element: (
                  <Suspense fallback={<SuspenseFallback />}>
                    <Bookmarked />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </ApolloProvider>
  </React.StrictMode>
);
