import { merge } from 'lodash';
import {
  typeDef as User,
  resolvers as userResolvers,
} from './graphql/type-defs/user';
import { typeDef as Show } from './graphql/type-defs/show';
import { typeDef as Movie } from './graphql/type-defs/movie';
import { typeDef as Token } from './graphql/type-defs/token';

// make executable shcema created here, so we will import all our type defs
