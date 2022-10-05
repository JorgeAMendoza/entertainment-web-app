import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_URI } from '../utils/config';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: GRAPHQL_URI as string,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  { path: '/', element: <div>Hello world, this is a movie app</div> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
