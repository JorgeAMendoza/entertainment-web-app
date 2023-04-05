// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const GRAPHQL_URI =
  import.meta.env.VITE_GRAPHQL || 'http://localhost:4000/graphql';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const HOST = import.meta.env.VITE_HOST || 'http://localhost:4000';

console.log(import.meta.env.VITE_GRAPHQL, import.meta.env.VITE_HOST);
