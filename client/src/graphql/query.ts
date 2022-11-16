import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      title
      type
      rating
      year
      images{
        small
        medium
        large
      }
    }
  }
`;
