import { DbMovie, DbShow } from '../database/db';
import { Movie, Show } from './resolvers-types.generated';

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
