import { DbMovie, DbShow } from '../database/db';
import { Movie, Show } from './resolvers-types.generated';

export const movieTransform = (
  movie: DbMovie
): Omit<Movie, 'thumbnailRegular' | 'thumbnailTrending'> => {
  return {
    id: movie.id,
    title: movie.title,
    rating: movie.rating,
    year: movie.year,
  };
};

export const showTransform = (
  show: DbShow
): Omit<Show, 'thumbnailRegular' | 'thumbnailTrending'> => {
  return {
    id: show.id,
    title: show.title,
    rating: show.rating,
    year: show.year,
  };
};

// so it seems that the transform is just for the regular properties, then properties that use special ones are using hte resolver. focus on the primitive values for hte transform, then the resolver for that grpahql type iwll handle the rest.
