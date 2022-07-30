import { DbMovie, DbShow } from '../database/db';
import { Resolvers } from './resolvers-types.generated';
import Query from './resolvers/Query';
import Movie from './resolvers/Movie';
import Show from './resolvers/Show';
import Mutation from './resolvers/Mutation';

export interface EntertainmentResolverContext {
  dbMovieCache: Record<string, DbMovie>;
  dbShowCache: Record<string, DbShow>;
}

const resolvers: Resolvers<EntertainmentResolverContext> = {
  Query,
  Movie,
  Show,
  Mutation,
};

export default resolvers;
