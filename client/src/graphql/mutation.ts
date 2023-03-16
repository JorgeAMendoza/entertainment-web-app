import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signUpUser($email: String!, $password: String!, $name: String!) {
    signUpUser(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const BOOKMARK_CONTENT = gql`
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

export const UNBOOKMARK_CONTENT = gql`
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
