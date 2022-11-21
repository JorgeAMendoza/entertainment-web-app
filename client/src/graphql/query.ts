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
    }
  }
`;

export const GET_ALL_SHOWS = gql`
  query GetAllShows {
    shows {
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
    }
  }
`;

export const GET_TRENDING_CONTENT = gql`
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
        }
      }
    }
  }
`;

export const GET_RECOMMENDED_CONTENT = gql`
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
        }
      }
    }
  }
`;
