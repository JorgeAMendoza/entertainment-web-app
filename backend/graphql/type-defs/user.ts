import { gql } from 'apollo-server';

export const typeDef = gql`
  type User {
    username: String!
    name: String!
    bookMarkedShows: [Show]!
    bookMarkedMovies: [Movie]!
  }
`;

export const resolvers = {
  User: {
    bookMarkedShows: () => {
      // Query to grab all the bookamrked shows, or populate
    },
    bookMarkedMovies: () => {
      // query to grab all the bookmarked movies, or populate
    },
  },
};
