import { EntertainmentResolverContext } from '../resolvers';
import { MovieResolvers } from '../resolvers-types.generated';

const movieResolver: MovieResolvers<EntertainmentResolverContext> = {
  images: (movie, _, __) => {
    return {
      small: movie.images.small,
      medium: movie.images.medium,
      large: movie.images.large,
    };
  },
};

export default movieResolver;
