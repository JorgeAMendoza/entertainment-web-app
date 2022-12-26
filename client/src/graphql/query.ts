import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
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

export const GET_ALL_SHOWS = gql`
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

export const GET_HOMEPAGE_CONTENT = gql`
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

export const GET_BOOKMARKED_CONTENT = gql`
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
