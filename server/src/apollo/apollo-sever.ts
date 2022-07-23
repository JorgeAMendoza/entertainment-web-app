import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { GRAPHQL_SCHEMA_PATH } from '../utils/constants';
import * as express from 'express';
import { Server } from 'http';
import { addResolversToSchema } from '@graphql-tools/schema';
import resolvers, { EntertainmentResolverContext } from './resolvers';

const SCHEMA = loadSchemaSync(GRAPHQL_SCHEMA_PATH, {
  loaders: [new GraphQLFileLoader()],
});

export async function createApolloServer(
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  const server = new ApolloServer({
    schema: addResolversToSchema({ schema: SCHEMA, resolvers }),
    context: (): EntertainmentResolverContext => ({
      userToken: '',
      dbMovieCache: {},
      dbShowCache: {},
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  return server;
}
