import { EntertainmentResolverContext } from '../resolvers';
import { MutationResolvers } from '../resolvers-types.generated';
import userService from '../../database/services/user-service';

const mutationResolver: MutationResolvers<EntertainmentResolverContext> = {
  async loginUser(_, args, __) {
    try {
      const token = await userService.loginUser(args);
      return {
        token,
      };
    } catch {
      return null;
    }
  },
};

export default mutationResolver;
