import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ImageLinks = {
  __typename?: 'ImageLinks';
  large: Scalars['String'];
  medium: Scalars['String'];
  small: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['String'];
  images: ImageLinks;
  rating: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  year: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFavoriteMovie?: Maybe<Movie>;
  addFavoriteShow?: Maybe<Show>;
  loginUser: Token;
  removeFavoriteMovie?: Maybe<Movie>;
  removeFavoriteShow?: Maybe<Show>;
  signUpUser?: Maybe<Token>;
};


export type MutationAddFavoriteMovieArgs = {
  movieId: Scalars['String'];
};


export type MutationAddFavoriteShowArgs = {
  showId: Scalars['String'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRemoveFavoriteMovieArgs = {
  movieId: Scalars['String'];
};


export type MutationRemoveFavoriteShowArgs = {
  showId: Scalars['String'];
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  movies: Array<Movie>;
  recommended: Recommended;
  shows: Array<Show>;
  trending: Trending;
  user?: Maybe<User>;
};

export type Recommended = {
  __typename?: 'Recommended';
  movies: Array<Movie>;
  shows: Array<Show>;
};

export type Show = {
  __typename?: 'Show';
  id: Scalars['String'];
  images: ImageLinks;
  rating: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  year: Scalars['Int'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type Trending = {
  __typename?: 'Trending';
  movies: Array<Movie>;
  shows: Array<Show>;
};

export type User = {
  __typename?: 'User';
  bookmarkedMovies?: Maybe<Array<Movie>>;
  bookmarkedShows?: Maybe<Array<Show>>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ImageLinks: ResolverTypeWrapper<ImageLinks>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Movie: ResolverTypeWrapper<Movie>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Recommended: ResolverTypeWrapper<Recommended>;
  Show: ResolverTypeWrapper<Show>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Token: ResolverTypeWrapper<Token>;
  Trending: ResolverTypeWrapper<Trending>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ImageLinks: ImageLinks;
  Int: Scalars['Int'];
  Movie: Movie;
  Mutation: {};
  Query: {};
  Recommended: Recommended;
  Show: Show;
  String: Scalars['String'];
  Token: Token;
  Trending: Trending;
  User: User;
};

export type ImageLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageLinks'] = ResolversParentTypes['ImageLinks']> = {
  large?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  small?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['ImageLinks'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addFavoriteMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationAddFavoriteMovieArgs, 'movieId'>>;
  addFavoriteShow?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<MutationAddFavoriteShowArgs, 'showId'>>;
  loginUser?: Resolver<ResolversTypes['Token'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'email' | 'password'>>;
  removeFavoriteMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationRemoveFavoriteMovieArgs, 'movieId'>>;
  removeFavoriteShow?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<MutationRemoveFavoriteShowArgs, 'showId'>>;
  signUpUser?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationSignUpUserArgs, 'email' | 'name' | 'password'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  recommended?: Resolver<ResolversTypes['Recommended'], ParentType, ContextType>;
  shows?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType>;
  trending?: Resolver<ResolversTypes['Trending'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RecommendedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recommended'] = ResolversParentTypes['Recommended']> = {
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  shows?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Show'] = ResolversParentTypes['Show']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['ImageLinks'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrendingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trending'] = ResolversParentTypes['Trending']> = {
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  shows?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  bookmarkedMovies?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
  bookmarkedShows?: Resolver<Maybe<Array<ResolversTypes['Show']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ImageLinks?: ImageLinksResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recommended?: RecommendedResolvers<ContextType>;
  Show?: ShowResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Trending?: TrendingResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

