import { EntertainmentResolverContext } from '../resolvers';
import { MutationResolvers } from '../resolvers-types.generated';
import userService from '../../database/services/user-service';
import signupService from '../../database/services/signup-service';
import {
  movieTransform,
  showTransform,
} from '../../apollo/transform-resolvers';
import { AuthenticationError, ForbiddenError } from 'apollo-server-core';
import { seedTestDB } from '../../utils/seed-database';

const mutationResolver: MutationResolvers<EntertainmentResolverContext> = {
  async loginUser(_, args, __) {
    const token = await userService.loginUser(args);
    return {
      token,
    };
  },
  async signUpUser(_, args, __) {
    const token = await signupService.signUpUser(args);
    return {
      token,
    };
  },
  async addFavoriteShow(_, args, { currentUser }) {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const show = await userService.addFavoriteShow(args.showId, user);
    return showTransform(show);
  },
  async addFavoriteMovie(_, args, { currentUser }) {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const movie = await userService.addFavoriteMovie(args.movieId, user);
    return movieTransform(movie);
  },
  async removeFavoriteShow(_, args, { currentUser }) {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const show = await userService.removeFavoriteShow(args.showId, user);
    return showTransform(show);
  },
  async removeFavoriteMovie(_, args, { currentUser }) {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const movie = await userService.removeFavoriteMovie(args.movieId, user);
    return movieTransform(movie);
  },
  async resetDb(_) {
    if (process.env.NODE_ENV !== 'test') {
      throw new ForbiddenError('not in test environment');
    }
    await seedTestDB();
    console.log('database re-seeded');
    return 'database sucessfully reset';
  },
};

export default mutationResolver;
