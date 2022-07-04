import { gql } from 'apollo-server';

export const typeDef = gql`
  type Token {
    value: String!
  }
`;
