import { EntertainmentResolverContext } from '../resolvers';
import { MovieResolvers } from '../resolvers-types.generated';

const movieResolver: MovieResolvers<EntertainmentResolverContext> = {
  thumbnailRegular: (movie, _, __) => {
    return {
      small: movie.thumbnailRegular?.small,
      medium: movie.thumbnailRegular?.medium,
      large: movie.thumbnailTrending?.large,
    };
  },
  thumbnailTrending: (movie, _, __) => {
    return {
      small: movie.thumbnailTrending?.small,
      medium: movie.thumbnailTrending?.medium,
      large: movie.thumbnailTrending?.large,
    };
  },
};

export default movieResolver;
