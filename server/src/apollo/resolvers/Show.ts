import { EntertainmentResolverContext } from '../resolvers';
import { ShowResolvers } from '../resolvers-types.generated';

const showResolver: ShowResolvers<EntertainmentResolverContext> = {
  thumbnailRegular: (show, _, __) => {
    return {
      small: show.thumbnailRegular?.small,
      medium: show.thumbnailRegular?.medium,
      large: show.thumbnailRegular?.large,
    };
  },
  thumbnailTrending: (show, _, __) => {
    return {
      small: show.thumbnailTrending?.small,
      medium: show.thumbnailTrending?.medium,
      large: show.thumbnailTrending?.large,
    };
  },
};

export default showResolver;
