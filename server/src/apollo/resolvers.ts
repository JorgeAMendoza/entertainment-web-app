import { Resolvers } from './resolvers-types.generated';
import Query from './resolvers/Query';
import Movie from './resolvers/Movie';
import Show from './resolvers/Show';
import Mutation from './resolvers/Mutation';
import { JwtPayload } from 'jsonwebtoken';

export interface EntertainmentResolverContext {
  currentUser: JwtPayload | null;
}

const resolvers: Resolvers<EntertainmentResolverContext> = {
  Content: {
    __resolveType(obj, _, __) {
      if (obj.type === 'movie') return 'Movie';
      if (obj.type === 'show') return 'Show';
      return null;
    },
  },
  Query,
  Movie,
  Show,
  Mutation,
};

export default resolvers;
