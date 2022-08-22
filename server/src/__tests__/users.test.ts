/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';
import User from '../database/schemas/user';

const baseURL = supertest('http://localhost:4000/graphql');

describe('User login', () => {
  test.only('valid user login sent, token returned', async () => {
    await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'Chopper!?1998',
          username: 'jorgemendoza2002@gmail.com',
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
      .expect('Content-Type', /application\/json/)
      .expect(400);

    expect(response.body.error[0].message).toBe(
      'Username or password is not valid'
    );
    expect(response.body.error[0].extensions.code).toBe('UNAUTHENTICATED');
  });
});

describe('User sign up', () => {
  test('new user signs up, token is returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  signUpUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'Zolo!?1998',
          username: 'onepiecefan@gmail.com',
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
          'mutation Mutation($email: String!, $password: String!) {  signUpUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'randompassword',
          email: 'jorgemendoza2002@gmail.com',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(400);

    expect(response.body.error[0].message).toBe(
      'Account already exists, please use another email address.'
    );
    expect(response.body.error[0].extensions.code).toBe('BAD_USER_INPUT');
  });
  test('invalid password, error returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  signUpUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'badpassword',
          email: 'onepiecefan@gmail.com',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(400);

    expect(response.body.error[0].message).toBe(
      'Password does not comply to standards'
    );
    expect(response.body.error[0].extensions.code).toBe('BAD_USER_INPUT');
  });
  test('invalid email, error returned', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  signUpUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'badpassword',
          email: 'bademail',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(400);

    expect(response.body.error[0].message).toBe('Invalid email');
    expect(response.body.error[0].extensions.code).toBe('BAD_USER_INPUT');
  });
});

describe('user adding favorite content', () => {
  test('user can save a favorite movie', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  addFavoriteMovie(movieID: $movieID) {title, year}}',
        variables: {
          movieID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const user = await User.findOne({ username: 'jorgemendoza2002@gmail.com' });
    expect(user?.bookmarkedMovies.length).toBe(1);
  });

  test('attempt to add movie that does not exist, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  addFavoriteMovie(movieID: $movieID) {title, year}}',
        variables: {
          movieID: 'badID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.error[0].message).toBe('Movie does not exist');
    expect(response.body.error.extensions.code).toBe('BAD_USER_INPUT');
  });

  test('attempt to add movie that is already bookmarked, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  addFavoriteMovie(movieID: $movieID) {title, year}}',
        variables: {
          movieID: 'initalID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  addFavoriteMovie(movieID: $movieID) {title, year}}',
        variables: {
          movieID: 'existingID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.error[0].message).toBe('Movie already favorited');
    expect(response.body.error.extensions.code).toBe('BAD_USER_INPUT');
  });

  test('user can save a favorite show', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($showID: String!) {  addFavoriteShow(showID: $showID) {title year}}',
        variables: {
          showID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const user = await User.findOne({ username: 'jorgemendoza2002@gmail.com' });
    expect(user?.bookmarkedShows.length).toBe(1);
  });

  test('attempt to add show that does not exist, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($showID: String!) {  addFavoriteShow(showID: $showID) {title year}}',
        variables: {
          showID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.error[0].message).toBe('Show does not exist');
    expect(response.body.error[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('attempt to add show that is already bookmarked, error returned', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($showID: String!) {  addFavoriteShow(showID: $showID) {title year}}',
        variables: {
          showID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const response = await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($showID: String!) {  addFavoriteShow(showID: $showID) {title year}}',
        variables: {
          showID: 'sameID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(response.body.error[0].message).toBe('Show already favorited');
    expect(response.body.error[0].extensions.code).toBe('BAD_USER_INPUT');
  });

  test('invalid token passed', async () => {
    const response = await baseURL
      .post('')
      .set({ authorization: `bearer badtoken` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  addFavoriteMovie(movieID: $movieID) {title, year}}',
        variables: {
          movieID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(400);

    expect(response.body.error[0].message).toBe('Invalid token passed');
    expect(response.body.error[0].extensions.code).toBe('UNAUTHENTICATED');
  });

  test('no token passed', async () => {
    const response = await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  addFavoriteMovie(movieID: $movieID) {title, year}}',
        variables: {
          movieID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(400);

    expect(response.body.error[0].message).toBe('No token passed');
    expect(response.body.error[0].extensions.code).toBe('UNATHENTICATED');
  });
});

describe('user can remove favorite content', () => {
  beforeEach(() => {
    console.log('add a favorite movie and show to the user');
  });
  test('user can remove a favorite movie', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;
    const user = await User.findOne({ email: 'jorgemendoza2002@gmail.com' });
    expect(user?.bookmarkedMovies.length).toBe(1);

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($movieID: String!) {  removeFavoriteMovie(movieID: $movieID) {title year}}',
        variables: {
          movieID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(user?.bookmarkedMovies.length).toBe(0);
  });
  test('user can remove a favorite show', async () => {
    const loginResponse = await baseURL.post('').send({
      operationName: 'Mutation',
      query:
        'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
      variables: {
        password: 'Chopper!?1998',
        username: 'jorgemendoza2002@gmail.com',
      },
    });

    const userToken = loginResponse.body.data.loginUser.token as string;
    const user = await User.findOne({ email: 'jorgemendoza2002@gmail.com' });
    expect(user?.bookmarkedShows.length).toBe(1);

    await baseURL
      .post('')
      .set({ authorization: `bearer ${userToken}` })
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($showID: String!) {  removeFavoriteShow(showID: $showID) {title year}}',
        variables: {
          showID: 'someID',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);

    expect(user?.bookmarkedShows.length).toBe(0);
  });

  afterEach(() => {
    console.log(
      'grab the user and set the bookmarked show and movies to a empty array'
    );
  });
});
