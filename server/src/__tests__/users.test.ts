/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import request from 'supertest';
import 'dotenv/config';
import { Movie as MovieType } from '../apollo/resolvers-types.generated';
import { Show as ShowType } from '../apollo/resolvers-types.generated';

const baseURL = request('http://localhost:4000/graphql');

beforeEach(async () => {
  await baseURL.post('').send({
    operationName: 'Mutation',
    query: 'mutation Mutation {resetDb}',
  });
});

describe('User login', () => {
  test('valid user login sent, token returned', async () => {
    await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'Chopper!?990',
          email: 'jorgemendoza2002@gmail.com',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
  test('invalid user login, error returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'badpassword',
          email: 'jorgemendoza2002@gmail.com',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe(
      'email or password is not valid'
    );
    expect(response.body.errors[0].extensions.code).toBe('UNAUTHENTICATED');
  });
});

describe('User sign up', () => {
  test('new user signs up, token is returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!, $name: String!) {  signUpUser(email: $email, password: $password, name: $name) {token}}',
        variables: {
          password: 'Zolo!?1998',
          email: 'onepiecefan@gmail.com',
          name: 'Zolo',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.data.signUpUser.token).not.toBe(null);
  });
  test('email already used, error returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!, $name: String!) {  signUpUser(email: $email, password: $password, name: $name) {token}}',
        variables: {
          password: 'Randompassword!?1919',
          email: 'jorgemendoza2002@gmail.com',
          name: 'Jorge Mendoza',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe(
      'account already exists, please use another email address'
    );
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });
  test('invalid password, error returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!, $name: String!) {  signUpUser(email: $email, password: $password, name: $name) {token}}',
        variables: {
          password: 'badpassword',
          email: 'onepiecefan@gmail.com',
          name: 'Josh smith',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe(
      'invalid password, please provide a stronger password'
    );
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });
  test('invalid email, error returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!, $name: String!) {  signUpUser(email: $email, password: $password, name: $name) {token}}',
        variables: {
          password: 'badpassword',
          email: 'bademail',
          name: 'josh smith',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe(
      'invalid email format provided'
    );
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });
});

describe('user adding favorite content', () => {
  test('user can save a favorite movie', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const movieRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{movies {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const movieData = movieRequest.body.data.movies as MovieType[];
    const contentId = movieData[0] ? movieData[0].id : 'randomID';

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
            ... on Movie{
              title,
              id,
              bookmarked
            }
          }}`,
        variables: {
          contentId: `${contentId}`,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/);

    const userData = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{user {bookmarkedMovies {title}}}' })
      .expect('Content-Type', /application\/json/);

    expect(userData.body.data.user.bookmarkedMovies.length).toBe(1);
  });

  test('attempt to add movie that does not exist, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Movie{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: `badmovieId`,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe('movie does not exist');
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('attempt to add movie that is already bookmarked, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const movieRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{movies {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const movieData = movieRequest.body.data.movies as MovieType[];
    const firstMovieId = movieData[0] ? movieData[0].id : 'randomID';

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Movie{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstMovieId,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Movie{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstMovieId,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe('movie already bookmarked');
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('user can save a favorite show', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const showRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{shows {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const showData = showRequest.body.data.shows as ShowType[];
    const firstShowId = showData[0] ? showData[0].id : 'randomID';

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstShowId,
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    const userData = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{user {bookmarkedShows {title}}}' })
      .expect('Content-Type', /application\/json/);

    expect(userData.body.data.user.bookmarkedShows.length).toBe(1);
  });

  test('attempt to add show that does not exist, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: 'badID',
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe('show does not exist');
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('attempt to add show that is already bookmarked, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const showRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{shows {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const showData = showRequest.body.data.shows as ShowType[];
    const firstShowId = showData[0] ? showData[0].id : 'randomID';

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstShowId,
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstShowId,
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe('show already bookmarked');
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('invalid token passed', async () => {
    const response = await baseURL
      .post('')
      .set({ authorization: `bearer badtoken` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: 'someid',
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe('invalid token');
    expect(response.body.errors[0].extensions.code).toBe('UNAUTHENTICATED');
  });

  test('no token passed', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: 'someID',
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.errors[0].message).toBe('invalid token');
    expect(response.body.errors[0].extensions.code).toBe('UNAUTHENTICATED');
  });
});

describe('user can remove favorite content', () => {
  test('user can remove a favorite movie', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const movieRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{movies {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const movieData = movieRequest.body.data.movies as MovieType[];
    const firstMovieId = movieData[0] ? movieData[0].id : 'randomID';

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Movie{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstMovieId,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/);

    const userData = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{user {bookmarkedMovies {title}}}' })
      .expect('Content-Type', /application\/json/);

    expect(userData.body.data.user.bookmarkedMovies.length).toBe(1);

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  unbookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Movie{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstMovieId,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/);

    const userDataTwo = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{user {bookmarkedMovies {title}}}' })
      .expect('Content-Type', /application\/json/);

    expect(userDataTwo.body.data.user.bookmarkedMovies.length).toBe(0);
  });

  test('user can remove a favorite show', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const showRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{shows {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const showData = showRequest.body.data.shows as ShowType[];
    const firstShowId = showData[0] ? showData[0].id : 'randomID';

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  bookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstShowId,
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    const userData = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{user {bookmarkedShows {title}}}' })
      .expect('Content-Type', /application\/json/);

    expect(userData.body.data.user.bookmarkedShows.length).toBe(1);

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  unbookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstShowId,
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/);

    const userDataTwo = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{user {bookmarkedShows {title}}}' })
      .expect('Content-Type', /application\/json/);

    expect(userDataTwo.body.data.user.bookmarkedShows.length).toBe(0);
  });

  test('attempt to remove show that does not exist', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const movieRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{movies {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const movieData = movieRequest.body.data.movies as MovieType[];
    const firstMovieId = movieData[0] ? movieData[0].id : 'randomID';

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  unbookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Movie{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstMovieId,
          contentType: 'movie',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.errors[0].message).toBe('movie is not bookmarked');
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('attempt to remove show that does not exist', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?990',
        email: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const showRequest = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({ query: '{shows {id, title, year, type}}' })
      .expect('Content-Type', /application\/json/);

    const showData = showRequest.body.data.shows as MovieType[];
    const firstShowId = showData[0] ? showData[0].id : 'randomID';

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query: `mutation Mutation($contentId: String!, $contentType: String!) {  unbookmarkContent(contentId: $contentId, contentType: $contentType) {
          ... on Show{
            title,
            id,
            bookmarked
          }
        }}`,
        variables: {
          contentId: firstShowId,
          contentType: 'show',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.errors[0].message).toBe('show is not bookmarked');
    expect(response.body.errors[0].extensions.code).toBe('BAD_USER_INPUT');
  });
});
