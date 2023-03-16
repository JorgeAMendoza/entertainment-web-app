import { EntertainmentResolverContext } from '../resolvers';
import { ShowResolvers } from '../resolvers-types.generated';

const showResolver: ShowResolvers<EntertainmentResolverContext> = {
  images: (show, _, __) => {
    return {
      small: show.images.small,
      medium: show.images.medium,
      large: show.images.large,
    };
  },
};

export default showResolver;
