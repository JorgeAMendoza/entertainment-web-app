import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_URI } from '../utils/config';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './routes/Welcome';
import LoginRoute from './routes/LoginRoute';
import SignUpRoute from './routes/SignUpRoute';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import LoginProvider from './context/login-context';
import Dashboard from './routes/Dashboard';

const client = new ApolloClient({
  uri: GRAPHQL_URI as string,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage />, errorElement: <ErrorPage /> },
  {
    path: '/login',
    element: <LoginRoute />,
  },
  { path: '/sign-up', element: <SignUpRoute /> },
  { path: '/dashboard', element: <Dashboard /> },
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
