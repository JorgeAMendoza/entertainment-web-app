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

  shows: async (_, __, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const bookmarkedShows = user.bookmarkedShows.map((id) => id._id.toString());
    const allShows = await showService.getAllShows();
    return allShows.map((show) => {
      const bookmarked = bookmarkedShows.includes(show.id);
      if (bookmarked) return showTransform(show, true);
      else return showTransform(show, false);
    });
  },

  homepage: async (_, __, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const bookmarkedShows = user.bookmarkedShows.map((id) => id._id.toString());
    const bookmarkedMovies = user.bookmarkedMovies.map((id) =>
      id._id.toString()
    );
    const allMovies = await movieService.getAllMovies();
    const allShows = await showService.getAllShows();

    // grabbing recommeded content (for now, just set of movies/shows)

    const recommendedShows = allShows
      .slice(0, Math.floor(allShows.length / 2))
      .map((show) => {
        const bookmarked = bookmarkedShows.includes(show.id);
        if (bookmarked) return showTransform(show, true);
        else return showTransform(show, false);
      });

    const recommendedMovies = allMovies
      .slice(0, Math.floor(allMovies.length / 2))
      .map((movie) => {
        const bookmarked = bookmarkedMovies.includes(movie.id);
        if (bookmarked) return movieTransform(movie, true);
        else return movieTransform(movie, false);
      });

    const recommended = [...recommendedMovies, ...recommendedShows];

    // grabbing trending shows

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
      const bookmarked = bookmarkedShows.includes(show.id);
      if (bookmarked) trendingShows.push(showTransform(show, true));
      else trendingShows.push(showTransform(show, false));
      showHash[show.title] = true;
    }
    while (trendingMovies.length < 3) {
      currentRandomNumber = Math.floor(Math.random() * allMovies.length);
      const movie = allMovies[currentRandomNumber];
      if (movie === undefined) continue;
      if (movie.title in movieHash) continue;
      const bookmarked = bookmarkedMovies.includes(movie.id);
      if (bookmarked) trendingMovies.push(movieTransform(movie, true));
      else trendingMovies.push(movieTransform(movie, false));
      movieHash[movie.title] = true;
    }

    const trending = [...trendingMovies, ...trendingShows];

    return {
      recommended,
      trending,
    };
  },

  user: async (_, __, { currentUser }) => {
    if (!currentUser) return null;
    const user = await User.findById(currentUser.id);
    if (!user) return null;
    const transformedUser = await userTransform(user);

    return transformedUser;
  },

  search: async (_, { title: search }, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    if (search === '') return [];
    const user = await userService.getUser(currentUser.id);
    const bookmarkedShows = user.bookmarkedShows.map((id) => id._id.toString());
    const bookmarkedMovies = user.bookmarkedMovies.map((id) =>
      id._id.toString()
    );

    const allMovies = await movieService.getAllMovies();
    const allShows = await showService.getAllShows();

    const filteredMovies = allMovies
      .filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
      .map((movie) => {
        const bookmarked = bookmarkedMovies.includes(movie.id);
        if (bookmarked) return movieTransform(movie, true);
        else return movieTransform(movie, false);
      });

    const filteredShows = allShows
      .filter((show) => show.title.toLowerCase().includes(search.toLowerCase()))
      .map((show) => {
        const bookmarked = bookmarkedShows.includes(show.id);
        if (bookmarked) return showTransform(show, true);
        else return showTransform(show, false);
      });

    return [...filteredMovies, ...filteredShows];
  },

  token: async (_, __, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    if (!user) throw new AuthenticationError('invalid token');
    const token = 'token verified!';

    return {
      token,
    };
  },
};

export default queryResolver;
