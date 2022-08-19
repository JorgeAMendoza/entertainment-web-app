import { EntertainmentResolverContext } from '../resolvers';
import { MutationResolvers } from '../resolvers-types.generated';
import userService from '../../database/services/user-service';
import signupService from '../../database/services/signup-service';
import {
  movieTransform,
  showTransform,
} from '../../apollo/transform-resolvers';

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
  async signUpUser(_, args, __) {
    try {
      const token = await signupService.signUpUser(args);
      return {
        token,
      };
    } catch {
      return null;
    }
  },
  async addFavoriteShow(_, args, { currentUser }) {
    if (!currentUser) return null;
    const user = await userService.getUser(currentUser.id);
    const show = await userService.addFavoriteShow(args.showId, user);
    return showTransform(show);
  },
  async addFavoriteMovie(_, args, { currentUser }) {
    if (!currentUser) return null;
    const user = await userService.getUser(currentUser.id);
    const movie = await userService.addFavoriteMovie(args.movieId, user);
    return movieTransform(movie);
  },
  async removeFavoriteShow(_, args, { currentUser }) {
    if (!currentUser) return null;
    const user = await userService.getUser(currentUser.id);
    const show = await userService.removeFavoriteShow(args.showId, user);
    return showTransform(show);
  },
  async removeFavoriteMovie(_, args, { currentUser }) {
    if (!currentUser) return null;
    const user = await userService.getUser(currentUser.id);
    const movie = await userService.removeFavoriteMovie(args.movieId, user);
    return movieTransform(movie);
  },
};

export default mutationResolver;
