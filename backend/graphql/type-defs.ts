import { gql } from 'apollo-server';

const typeDefs = gql`

  type Query{
    allShows: [Show!]!
    allMovies: [Movie!]!
    getBookmarkedShows: [Show!]!
    getBookmarkedMovies: [Movie!]!
  }

  type Mutation{
    addShow(
      title: String!
      thumbnail: { trending: [String!]!, regular: [String!]!}
      year: Int!
      rating: String!
      isTrending: String!
    )

    addMovie(
      title: String!
      thumbnail: { trending: [String!]!, regular: [String!]!}
      year: Int!
      rating: String!
      isTrending: String!
    )

    createUser(username: String!, password:String!)

    login(username: String!, password: String!)
  }
`;

export default typeDefs;
