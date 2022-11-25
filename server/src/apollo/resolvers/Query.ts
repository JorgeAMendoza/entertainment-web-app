import { EntertainmentResolverContext } from '../resolvers';
import { QueryResolvers, Show, Movie } from '../resolvers-types.generated';
import showService from '../../database/services/show-service';
import movieService from '../../database/services/movie-service';
import {
  movieTransform,
  showTransform,
  userTransform,
} from '../../apollo/transform-resolvers';
import User from '../../database/schemas/user';
import { AuthenticationError } from 'apollo-server-core';
import userService from '../../database/services/user-service';

const queryResolver: QueryResolvers<EntertainmentResolverContext> = {
  movies: async (_, __, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    // next get ids of all bookmarked content,
    const bookmarkedMovies = user.bookmarkedMovies.map((id) =>
      id._id.toString()
    );
    const allMovies = await movieService.getAllMovies();
    return allMovies.map((movie) => {
      const bookmarked = bookmarkedMovies.includes(movie.id);
      if (bookmarked) return movieTransform(movie, true);
      else return movieTransform(movie, false);
    });
  },
  shows: async (_, __, ___) => {
    const allShows = await showService.getAllShows();
    return allShows.map((show) => showTransform(show));
  },
  recommended: async (_, __, ___) => {
    const allMovies = await movieService.getAllMovies();
    const allShows = await showService.getAllShows();

    const recommendedShows = allShows
      .slice(0, Math.floor(allShows.length / 2))
      .map((show) => showTransform(show));

      // need to change movie transform to properly reflect bookmarked
    const recommendedMovies = allMovies
      .slice(0, Math.floor(allMovies.length / 2))
      .map((movie) => movieTransform(movie, false));

    return {
      content: [...recommendedMovies, ...recommendedShows],
    };
  },
  // need to change trending to properly reflect bookmarked status
  trending: async (_, __, ___) => {
    const allMovies = await movieService.getAllMovies();
    const allShows = await showService.getAllShows();

    let currentRandomNumber: number;
    const trendingShows: Show[] = [];
    const trendingMovies: Movie[] = [];
    const showHash: Record<string, boolean> = {};
    const movieHash: Record<string, boolean> = {};
    while (trendingShows.length < 2) {
      currentRandomNumber = Math.floor(Math.random() * allShows.length);
      const show = allShows[currentRandomNumber];
      if (show === undefined) continue;
      if (show.title in showHash) continue;
      trendingShows.push(showTransform(show));
      showHash[show.title] = true;
    }
    while (trendingMovies.length < 3) {
      currentRandomNumber = Math.floor(Math.random() * allMovies.length);
      const movie = allMovies[currentRandomNumber];
      if (movie === undefined) continue;
      if (movie.title in movieHash) continue;
      trendingMovies.push(movieTransform(movie, false));
      movieHash[movie.title] = true;
    }
    return {
      content: [...trendingShows, ...trendingMovies],
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
