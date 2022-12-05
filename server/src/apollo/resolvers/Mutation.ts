import { EntertainmentResolverContext } from '../resolvers';
import { MutationResolvers } from '../resolvers-types.generated';
import userService from '../../database/services/user-service';
import signupService from '../../database/services/signup-service';
import {
  movieTransform,
  showTransform,
} from '../../apollo/transform-resolvers';
import {
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} from 'apollo-server-core';
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
  async bookmarkContent(_, args, { currentUser }) {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    if (args.contentType === 'show') {
      const show = await userService.addFavoriteShow(args.contentId, user);
      return showTransform(show, true);
    } else if (args.contentType === 'movie') {
      const movie = await userService.addFavoriteMovie(args.contentId, user);
      return movieTransform(movie, true);
    } else {
      throw new UserInputError('bad content type provided');
    }
  },
  // async removeFavoriteShow(_, args, { currentUser }) {
  //   if (!currentUser) throw new AuthenticationError('invalid token');
  //   const user = await userService.getUser(currentUser.id);
  //   const show = await userService.removeFavoriteShow(args.showId, user);
  //   return showTransform(show, false);
  // },
  // async removeFavoriteMovie(_, args, { currentUser }) {
  //   if (!currentUser) throw new AuthenticationError('invalid token');
  //   const user = await userService.getUser(currentUser.id);
  //   const movie = await userService.removeFavoriteMovie(args.movieId, user);
  //   return movieTransform(movie, false);
  // },
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
