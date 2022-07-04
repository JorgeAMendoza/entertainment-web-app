import { gql } from 'apollo-server';

export const typeDef = gql`
  type Show {
    title: String!
    thumbnailTrendingSmall: String!
    thumbnailTrendingLarge: String!
    thumbnailRegularSmall: String!
    thumbnailRegularLarge: String!
    year: Int!
    rating: String!
  }
`;
