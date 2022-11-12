import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_URI } from './utils/config';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomeRoute from './routes/WelcomeRoute';
import LoginRoute from './routes/LoginRoute';
import SignUpRoute from './routes/SignUpRoute';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import LoginProvider from './context/login-context';
import Dashboard from './routes/Dashboard';
import Root from './routes/Root';
import Homepage from './routes/Homepage';
import Movies from './routes/Movies';
import TVShows from './routes/TVShows';
import Bookmarked from './routes/Bookmarked';

const client = new ApolloClient({
  uri: GRAPHQL_URI as string,
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
        element: <WelcomeRoute />,
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
                element: <Movies />,
              },
              {
                path: '/dashboard/shows',
                element: <TVShows />,
              },
              {
                path: '/dashboard/my-stuff',
                element: <Bookmarked />,
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
