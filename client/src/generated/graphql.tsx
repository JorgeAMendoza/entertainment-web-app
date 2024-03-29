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

export type HomepageContent = {
  __typename?: 'HomepageContent';
  recommended: Array<Content>;
  trending: Array<Content>;
};

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
  homepage: HomepageContent;
  movies: Array<Movie>;
  search: Array<Content>;
  shows: Array<Show>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
};

export type QuerySearchArgs = {
  title: Scalars['String'];
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

export type UnbookmarkContentMutationVariables = Exact<{
  contentId: Scalars['String'];
  contentType: Scalars['String'];
}>;

export type UnbookmarkContentMutation = {
  __typename?: 'Mutation';
  unbookmarkContent:
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

export type GetHomepageContentQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomepageContentQuery = {
  __typename?: 'Query';
  homepage: {
    __typename?: 'HomepageContent';
    recommended: Array<
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
    trending: Array<
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

export type SearchAllContentQueryVariables = Exact<{
  title: Scalars['String'];
}>;

export type SearchAllContentQuery = {
  __typename?: 'Query';
  search: Array<
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

export type VerifyTokenQueryVariables = Exact<{ [key: string]: never }>;

export type VerifyTokenQuery = {
  __typename?: 'Query';
  token?: { __typename?: 'Token'; token: string } | null;
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
export const UnbookmarkContentDocument = gql`
  mutation unbookmarkContent($contentId: String!, $contentType: String!) {
    unbookmarkContent(contentId: $contentId, contentType: $contentType) {
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
export type UnbookmarkContentMutationFn = Apollo.MutationFunction<
  UnbookmarkContentMutation,
  UnbookmarkContentMutationVariables
>;

/**
 * __useUnbookmarkContentMutation__
 *
 * To run a mutation, you first call `useUnbookmarkContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnbookmarkContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unbookmarkContentMutation, { data, loading, error }] = useUnbookmarkContentMutation({
 *   variables: {
 *      contentId: // value for 'contentId'
 *      contentType: // value for 'contentType'
 *   },
 * });
 */
export function useUnbookmarkContentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnbookmarkContentMutation,
    UnbookmarkContentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UnbookmarkContentMutation,
    UnbookmarkContentMutationVariables
  >(UnbookmarkContentDocument, options);
}
export type UnbookmarkContentMutationHookResult = ReturnType<
  typeof useUnbookmarkContentMutation
>;
export type UnbookmarkContentMutationResult =
  Apollo.MutationResult<UnbookmarkContentMutation>;
export type UnbookmarkContentMutationOptions = Apollo.BaseMutationOptions<
  UnbookmarkContentMutation,
  UnbookmarkContentMutationVariables
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
export const GetHomepageContentDocument = gql`
  query GetHomepageContent {
    homepage {
      recommended {
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
      trending {
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
 * __useGetHomepageContentQuery__
 *
 * To run a query within a React component, call `useGetHomepageContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomepageContentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHomepageContentQuery,
    GetHomepageContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetHomepageContentQuery,
    GetHomepageContentQueryVariables
  >(GetHomepageContentDocument, options);
}
export function useGetHomepageContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHomepageContentQuery,
    GetHomepageContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetHomepageContentQuery,
    GetHomepageContentQueryVariables
  >(GetHomepageContentDocument, options);
}
export type GetHomepageContentQueryHookResult = ReturnType<
  typeof useGetHomepageContentQuery
>;
export type GetHomepageContentLazyQueryHookResult = ReturnType<
  typeof useGetHomepageContentLazyQuery
>;
export type GetHomepageContentQueryResult = Apollo.QueryResult<
  GetHomepageContentQuery,
  GetHomepageContentQueryVariables
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
export const SearchAllContentDocument = gql`
  query SearchAllContent($title: String!) {
    search(title: $title) {
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

/**
 * __useSearchAllContentQuery__
 *
 * To run a query within a React component, call `useSearchAllContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAllContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAllContentQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchAllContentQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchAllContentQuery,
    SearchAllContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchAllContentQuery, SearchAllContentQueryVariables>(
    SearchAllContentDocument,
    options
  );
}
export function useSearchAllContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchAllContentQuery,
    SearchAllContentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchAllContentQuery,
    SearchAllContentQueryVariables
  >(SearchAllContentDocument, options);
}
export type SearchAllContentQueryHookResult = ReturnType<
  typeof useSearchAllContentQuery
>;
export type SearchAllContentLazyQueryHookResult = ReturnType<
  typeof useSearchAllContentLazyQuery
>;
export type SearchAllContentQueryResult = Apollo.QueryResult<
  SearchAllContentQuery,
  SearchAllContentQueryVariables
>;
export const VerifyTokenDocument = gql`
  query VerifyToken {
    token {
      token
    }
  }
`;

/**
 * __useVerifyTokenQuery__
 *
 * To run a query within a React component, call `useVerifyTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useVerifyTokenQuery(
  baseOptions?: Apollo.QueryHookOptions<
    VerifyTokenQuery,
    VerifyTokenQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(
    VerifyTokenDocument,
    options
  );
}
export function useVerifyTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VerifyTokenQuery,
    VerifyTokenQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(
    VerifyTokenDocument,
    options
  );
}
export type VerifyTokenQueryHookResult = ReturnType<typeof useVerifyTokenQuery>;
export type VerifyTokenLazyQueryHookResult = ReturnType<
  typeof useVerifyTokenLazyQuery
>;
export type VerifyTokenQueryResult = Apollo.QueryResult<
  VerifyTokenQuery,
  VerifyTokenQueryVariables
>;
