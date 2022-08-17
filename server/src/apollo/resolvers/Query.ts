import { EntertainmentResolverContext } from '../resolvers';
import { QueryResolvers } from '../resolvers-types.generated';
import showService from '../../database/services/show-service';
import movieService from '../../database/services/movie-service';
import {
  movieTransform,
  showTransform,
  userTransform,
} from '../../apollo/transform-resolvers';
import { DbMovie, DbShow } from '../../database/db';
import User from '../../database/schemas/user';

const queryResolver: QueryResolvers<EntertainmentResolverContext> = {
  movies: async (_, __, { dbMovieCache }) => {
    const allMovies = await movieService.getAllMovies();
    allMovies.forEach((movie) => {
      dbMovieCache[movie.id] = movie;
    });
    return allMovies.map((movie) => movieTransform(movie));
  },
  shows: async (_, __, { dbShowCache }) => {
    const allShows = await showService.getAllShows();
    allShows.forEach((show) => {
      dbShowCache[show.id] = show;
    });
    return allShows.map((show) => showTransform(show));
  },
  recommended: (_, __, { dbMovieCache, dbShowCache }) => {
    const showsArray: DbShow[] = [];
    for (const show in dbShowCache) {
      showsArray.push(dbShowCache[show] as DbShow);
    }
    const recommendedShows = showsArray
      .slice(0, Math.floor(showsArray.length / 2))
      .map((show) => showTransform(show));

    const movieArray: DbMovie[] = [];
    for (const movie in dbMovieCache) {
      movieArray.push(dbMovieCache[movie] as DbMovie);
    }
    const recommendedMovies = movieArray
      .slice(0, Math.floor(movieArray.length / 2))
      .map((movie) => movieTransform(movie));

    return {
      shows: recommendedShows,
      movies: recommendedMovies,
    };
  },
  user: async (_, __, { currentUser }) => {
    if (!currentUser) return null;
    const user = await User.findById(currentUser.id);
    if (!user) return null;
    const transformedUser = await userTransform(user);

    return transformedUser;
  },
};

export default queryResolver;
