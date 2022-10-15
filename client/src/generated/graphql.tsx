import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Content = Movie | Show;

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
  addFavoriteMovie: Movie;
  addFavoriteShow: Show;
  loginUser: Token;
  removeFavoriteMovie: Movie;
  removeFavoriteShow: Show;
  signUpUser: Token;
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
  content: Array<Content>;
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
  content: Array<Content>;
};

export type User = {
  __typename?: 'User';
  bookmarkedMovies?: Maybe<Array<Movie>>;
  bookmarkedShows?: Maybe<Array<Show>>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginUserMutation = {
  __typename?: 'Mutation';
  loginUser: { __typename?: 'Token'; token: string };
};

export type GetAllMoviesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllMoviesQuery = {
  __typename?: 'Query';
  movies: Array<{
    __typename?: 'Movie';
    id: string;
    title: string;
    type: string;
  }>;
};

export const LoginUserDocument = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    options
  );
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>;
export const GetAllMoviesDocument = gql`
  query GetAllMovies {
    movies {
      id
      title
      type
    }
  }
`;

/**
 * __useGetAllMoviesQuery__
 *
 * To run a query within a React component, call `useGetAllMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMoviesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllMoviesQuery,
    GetAllMoviesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllMoviesQuery, GetAllMoviesQueryVariables>(
    GetAllMoviesDocument,
    options
  );
}
export function useGetAllMoviesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllMoviesQuery,
    GetAllMoviesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllMoviesQuery, GetAllMoviesQueryVariables>(
    GetAllMoviesDocument,
    options
  );
}
export type GetAllMoviesQueryHookResult = ReturnType<
  typeof useGetAllMoviesQuery
>;
export type GetAllMoviesLazyQueryHookResult = ReturnType<
  typeof useGetAllMoviesLazyQuery
>;
export type GetAllMoviesQueryResult = Apollo.QueryResult<
  GetAllMoviesQuery,
  GetAllMoviesQueryVariables
>;
