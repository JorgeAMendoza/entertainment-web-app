import { DbMovie, DbShow } from '../database/db';
import { Movie, Show } from './resolvers-types.generated';

export const movieTransform = (movie: DbMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    rating: movie.rating,
    year: movie.year,
    thumbnailRegular: movie.thumbnail.regular,
    thumbnailTrending: movie.thumbnail.trending,
  };
};

export const showTransform = (show: DbShow): Show => {
  return {
    id: show.id,
    title: show.title,
    rating: show.rating,
    year: show.year,
    thumbnailRegular: show.thumbnail.regular,
    thumbnailTrending: show.thumbnail.trending,
  };
};
