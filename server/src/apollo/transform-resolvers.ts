import { DbMovie, DbShow, DbUser } from '../database/db';
import { Movie, Show, User } from './resolvers-types.generated';
import movieService from '../database/services/movie-service';
import showService from '../database/services/show-service';
import { RefProperty } from '../database/db';

export const movieTransform = (movie: DbMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    rating: movie.rating,
    images: {
      small: movie.images.small,
      medium: movie.images.medium,
      large: movie.images.large,
    },
    year: movie.year,
    type: 'movie',
  };
};

export const showTransform = (show: DbShow): Show => {
  return {
    id: show.id,
    title: show.title,
    rating: show.rating,
    images: {
      small: show.images.small,
      medium: show.images.medium,
      large: show.images.large,
    },
    year: show.year,
    type: 'show',
  };
};

export const userTransform = async (user: DbUser): Promise<User> => {
  const userMovies = await getUserMovies(user.bookmarkedMovies);
  const userShows = await getUserShows(user.bookmarkedShows);

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    bookmarkedMovies: userMovies,
    bookmarkedShows: userShows,
  };
};

const getUserMovies = async (movieIDs: RefProperty[]): Promise<Movie[]> => {
  const userMovies: Movie[] = [];

  for (let i = 0; i < movieIDs.length; i++) {
    if (movieIDs[i] === undefined) continue;
    const movie = await movieService.getMovieById(
      movieIDs[i]?.toString() as string
    );
    if (movie !== null) userMovies.push(movieTransform(movie));
  }

  return userMovies;
};

const getUserShows = async (showIDs: RefProperty[]): Promise<Show[]> => {
  const userShows: Show[] = [];

  for (let i = 0; i < showIDs.length; i++) {
    if (showIDs[i] === undefined) continue;
    const show = await showService.getShowById(
      showIDs[i]?.toString() as string
    );
    userShows.push(showTransform(show));
  }

  return userShows;
};
