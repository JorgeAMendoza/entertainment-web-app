import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { GRAPHQL_SCHEMA_PATH } from '../utils/constants';
import * as express from 'express';
import { Server } from 'http';
import { addResolversToSchema } from '@graphql-tools/schema';
import resolvers, { EntertainmentResolverContext } from './resolvers';
import * as jwt from 'jsonwebtoken';

const SCHEMA = loadSchemaSync(GRAPHQL_SCHEMA_PATH, {
  loaders: [new GraphQLFileLoader()],
});

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    id: string;
    username: string;
  }
}

export async function createApolloServer(
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  const server = new ApolloServer({
    schema: addResolversToSchema({ schema: SCHEMA, resolvers }),
    context: ({ req }): EntertainmentResolverContext => ({
      dbMovieCache: {},
      dbShowCache: {},
      currentUser: (() => {
        const auth = req ? req.headers.authorization : null;
        if (auth && auth.toLowerCase().startsWith('bearer')) {
          try {
            const decodedToken = jwt.verify(
              auth.substring(7),
              process.env.JWT_SECRET as string
            );
            if (typeof decodedToken === 'string') return null;
            else return decodedToken;
          } catch {
            return null;
          }
        } else return null;
      })(),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  return server;
}
