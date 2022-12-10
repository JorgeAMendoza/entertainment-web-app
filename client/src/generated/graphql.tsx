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
  bookmarked: Scalars['Boolean'];
  id: Scalars['String'];
  images: ImageLinks;
  rating: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  year: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bookmarkContent: Content;
  loginUser: Token;
  resetDb: Scalars['String'];
  signUpUser: Token;
  unbookmarkContent: Content;
};

export type MutationBookmarkContentArgs = {
  contentId: Scalars['String'];
  contentType: Scalars['String'];
};

export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUnbookmarkContentArgs = {
  contentId: Scalars['String'];
  contentType: Scalars['String'];
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
  bookmarked: Scalars['Boolean'];
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

export type SignUpUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;

export type SignUpUserMutation = {
  __typename?: 'Mutation';
  signUpUser: { __typename?: 'Token'; token: string };
};

export type BookmarkContentMutationVariables = Exact<{
  contentId: Scalars['String'];
  contentType: Scalars['String'];
}>;

export type BookmarkContentMutation = {
  __typename?: 'Mutation';
  bookmarkContent:
    | {
        __typename?: 'Movie';
        id: string;
        title: string;
        year: number;
        rating: string;
        type: string;
        bookmarked: boolean;
        images: {
          __typename?: 'ImageLinks';
          small: string;
          medium: string;
          large: string;
        };
      }
    | {
        __typename?: 'Show';
        id: string;
        title: string;
        year: number;
        rating: string;
        type: string;
        bookmarked: boolean;
        images: {
          __typename?: 'ImageLinks';
          small: string;
          medium: string;
          large: string;
        };
      };
};

export type GetAllMoviesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllMoviesQuery = {
  __typename?: 'Query';
  movies: Array<{
    __typename?: 'Movie';
    id: string;
    title: string;
    type: string;
    rating: string;
    year: number;
    bookmarked: boolean;
    images: {
      __typename?: 'ImageLinks';
      small: string;
      medium: string;
      large: string;
    };
  }>;
};

export type GetAllShowsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllShowsQuery = {
  __typename?: 'Query';
  shows: Array<{
    __typename?: 'Show';
    id: string;
    title: string;
    type: string;
    year: number;
    rating: string;
    bookmarked: boolean;
    images: {
      __typename?: 'ImageLinks';
      small: string;
      medium: string;
      large: string;
    };
  }>;
};

export type GetTrendingContentQueryVariables = Exact<{ [key: string]: never }>;

export type GetTrendingContentQuery = {
  __typename?: 'Query';
  trending: {
    __typename?: 'Trending';
    content: Array<
      | {
          __typename?: 'Movie';
          id: string;
          title: string;
          year: number;
          rating: string;
          type: string;
          bookmarked: boolean;
          images: {
            __typename?: 'ImageLinks';
            small: string;
            medium: string;
            large: string;
          };
        }
      | {
          __typename?: 'Show';
          id: string;
          title: string;
          year: number;
          rating: string;
          type: string;
          bookmarked: boolean;
          images: {
            __typename?: 'ImageLinks';
            small: string;
            medium: string;
            large: string;
          };
        }
    >;
  };
};

export type GetRecommendedContentQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetRecommendedContentQuery = {
  __typename?: 'Query';
  recommended: {
    __typename?: 'Recommended';
    content: Array<
      | {
          __typename?: 'Movie';
          id: string;
          title: string;
          year: number;
          rating: string;
          type: string;
          bookmarked: boolean;
          images: {
            __typename?: 'ImageLinks';
            small: string;
            medium: string;
            large: string;
          };
        }
      | {
          __typename?: 'Show';
          id: string;
          title: string;
          year: number;
          rating: string;
          type: string;
          bookmarked: boolean;
          images: {
            __typename?: 'ImageLinks';
            small: string;
            medium: string;
            large: string;
          };
        }
    >;
  };
};

export type GetBookmarkedContentQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetBookmarkedContentQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    bookmarkedMovies?: Array<{
      __typename?: 'Movie';
      id: string;
      title: string;
      type: string;
      rating: string;
      year: number;
      bookmarked: boolean;
      images: {
        __typename?: 'ImageLinks';
        small: string;
        medium: string;
        large: string;
      };
    }> | null;
    bookmarkedShows?: Array<{
      __typename?: 'Show';
      id: string;
      title: string;
      type: string;
      rating: string;
      year: number;
      bookmarked: boolean;
      images: {
        __typename?: 'ImageLinks';
        small: string;
        medium: string;
        large: string;
      };
    }> | null;
  } | null;
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
export const SignUpUserDocument = gql`
  mutation signUpUser($email: String!, $password: String!, $name: String!) {
    signUpUser(email: $email, password: $password, name: $name) {
      token
    }
  }
`;
export type SignUpUserMutationFn = Apollo.MutationFunction<
  SignUpUserMutation,
  SignUpUserMutationVariables
>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignUpUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpUserMutation,
    SignUpUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(
    SignUpUserDocument,
    options
  );
}
export type SignUpUserMutationHookResult = ReturnType<
  typeof useSignUpUserMutation
>;
export type SignUpUserMutationResult =
  Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<
  SignUpUserMutation,
  SignUpUserMutationVariables
>;
export const BookmarkContentDocument = gql`
  mutation bookmarkContent($contentId: String!, $contentType: String!) {
    bookmarkContent(contentId: $contentId, contentType: $contentType) {
      ... on Movie {
        id
        title
        year
        rating
        images {
          small
          medium
          large
        }
        type
        bookmarked
      }
      ... on Show {
        id
        title
        year
        rating
        images {
          small
          medium
          large
        }
        type
        bookmarked
      }
    }
  }
`;
export type BookmarkContentMutationFn = Apollo.MutationFunction<
  BookmarkContentMutation,
  BookmarkContentMutationVariables
>;

/**
 * __useBookmarkContentMutation__
 *
 * To run a mutation, you first call `useBookmarkContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookmarkContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookmarkContentMutation, { data, loading, error }] = useBookmarkContentMutation({
 *   variables: {
 *      contentId: // value for 'contentId'
 *      contentType: // value for 'contentType'
 *   },
 * });
 */
export function useBookmarkContentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BookmarkContentMutation,
    BookmarkContentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BookmarkContentMutation,
    BookmarkContentMutationVariables
  >(BookmarkContentDocument, options);
}
export type BookmarkContentMutationHookResult = ReturnType<
  typeof useBookmarkContentMutation
>;
export type BookmarkContentMutationResult =
  Apollo.MutationResult<BookmarkContentMutation>;
export type BookmarkContentMutationOptions = Apollo.BaseMutationOptions<
  BookmarkContentMutation,
  BookmarkContentMutationVariables
>;
export const GetAllMoviesDocument = gql`
  query GetAllMovies {
    movies {
      id
      title
      type
      rating
      year
      images {
        small
        medium
        large
      }
      bookmarked
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
export const GetAllShowsDocument = gql`
  query GetAllShows {
    shows {
      id
      title
      type
      year
      rating
      images {
        small
        medium
        large
      }
      bookmarked
    }
  }
`;

/**
 * __useGetAllShowsQuery__
 *
 * To run a query within a React component, call `useGetAllShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllShowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllShowsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllShowsQuery,
    GetAllShowsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllShowsQuery, GetAllShowsQueryVariables>(
    GetAllShowsDocument,
    options
  );
}
export function useGetAllShowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllShowsQuery,
    GetAllShowsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllShowsQuery, GetAllShowsQueryVariables>(
    GetAllShowsDocument,
    options
  );
}
export type GetAllShowsQueryHookResult = ReturnType<typeof useGetAllShowsQuery>;
export type GetAllShowsLazyQueryHookResult = ReturnType<
  typeof useGetAllShowsLazyQuery
>;
export type GetAllShowsQueryResult = Apollo.QueryResult<
  GetAllShowsQuery,
  GetAllShowsQueryVariables
>;
export const GetTrendingContentDocument = gql`
  query GetTrendingContent {
    trending {
      content {
        ... on Movie {
          id
          title
          year
          rating
          images {
            small
            medium
            large
          }
          type
          bookmarked
        }
        ... on Show {
          id
          title
          year
          rating
          images {
            small
            medium
            large
          }
          type
          bookmarked
        }
      }
    }
  }
`;

/**
 * __useGetTrendingContentQuery__
 *
 * To run a query within a React component, call `useGetTrendingContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrendingContentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTrendingContentQuery,
    GetTrendingContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTrendingContentQuery,
    GetTrendingContentQueryVariables
  >(GetTrendingContentDocument, options);
}
export function useGetTrendingContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTrendingContentQuery,
    GetTrendingContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTrendingContentQuery,
    GetTrendingContentQueryVariables
  >(GetTrendingContentDocument, options);
}
export type GetTrendingContentQueryHookResult = ReturnType<
  typeof useGetTrendingContentQuery
>;
export type GetTrendingContentLazyQueryHookResult = ReturnType<
  typeof useGetTrendingContentLazyQuery
>;
export type GetTrendingContentQueryResult = Apollo.QueryResult<
  GetTrendingContentQuery,
  GetTrendingContentQueryVariables
>;
export const GetRecommendedContentDocument = gql`
  query GetRecommendedContent {
    recommended {
      content {
        ... on Movie {
          id
          title
          year
          rating
          images {
            small
            medium
            large
          }
          type
          bookmarked
        }
        ... on Show {
          id
          title
          year
          rating
          images {
            small
            medium
            large
          }
          type
          bookmarked
        }
      }
    }
  }
`;

/**
 * __useGetRecommendedContentQuery__
 *
 * To run a query within a React component, call `useGetRecommendedContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendedContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecommendedContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecommendedContentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRecommendedContentQuery,
    GetRecommendedContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecommendedContentQuery,
    GetRecommendedContentQueryVariables
  >(GetRecommendedContentDocument, options);
}
export function useGetRecommendedContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecommendedContentQuery,
    GetRecommendedContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecommendedContentQuery,
    GetRecommendedContentQueryVariables
  >(GetRecommendedContentDocument, options);
}
export type GetRecommendedContentQueryHookResult = ReturnType<
  typeof useGetRecommendedContentQuery
>;
export type GetRecommendedContentLazyQueryHookResult = ReturnType<
  typeof useGetRecommendedContentLazyQuery
>;
export type GetRecommendedContentQueryResult = Apollo.QueryResult<
  GetRecommendedContentQuery,
  GetRecommendedContentQueryVariables
>;
export const GetBookmarkedContentDocument = gql`
  query GetBookmarkedContent {
    user {
      bookmarkedMovies {
        id
        title
        type
        rating
        year
        images {
          small
          medium
          large
        }
        bookmarked
      }
      bookmarkedShows {
        id
        title
        type
        rating
        year
        images {
          small
          medium
          large
        }
        bookmarked
      }
    }
  }
`;

/**
 * __useGetBookmarkedContentQuery__
 *
 * To run a query within a React component, call `useGetBookmarkedContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarkedContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarkedContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBookmarkedContentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBookmarkedContentQuery,
    GetBookmarkedContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBookmarkedContentQuery,
    GetBookmarkedContentQueryVariables
  >(GetBookmarkedContentDocument, options);
}
export function useGetBookmarkedContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookmarkedContentQuery,
    GetBookmarkedContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBookmarkedContentQuery,
    GetBookmarkedContentQueryVariables
  >(GetBookmarkedContentDocument, options);
}
export type GetBookmarkedContentQueryHookResult = ReturnType<
  typeof useGetBookmarkedContentQuery
>;
export type GetBookmarkedContentLazyQueryHookResult = ReturnType<
  typeof useGetBookmarkedContentLazyQuery
>;
export type GetBookmarkedContentQueryResult = Apollo.QueryResult<
  GetBookmarkedContentQuery,
  GetBookmarkedContentQueryVariables
>;
