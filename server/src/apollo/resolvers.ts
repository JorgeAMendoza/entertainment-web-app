import { DbMovie, DbShow } from '../database/db';

export interface EntertainmentResolverContext {
  userToken: string;
  dbMovieCache: Record<string, DbMovie>;
  dbShowCache: Record<string, DbShow>;
}

// the cache will hold our user token, movies we have collected, and shows we have collected. 
