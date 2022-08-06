/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';

const baseURL = supertest('http://localhost:4000/graphql');

describe('User login', () => {
  test.only('valid user login sent, token returned', async () => {
    await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($username: String!, $password: String!) {  loginUser(username: $username, password: $password) {token}}',
        variables: {
          password: 'chopper',
          username: 'jorgeam1998',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
  test.todo('invalid user login, null returned');
});

describe('User sign up', () => {
  test.todo('new user signs up, token is returned');
  test.todo('email already used, null returned');
  test.todo('invalid password, null returned');
});

describe('movie data', () => {
  test('movies returned as json', async () => {
    await baseURL
      .post('')
      .send({ query: '{movies {title, year}}' })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  test('all movies returned', async () => {
    const response = await baseURL
      .post('')
      .send({ query: '{movies {title, year}}' });
    expect(response.body.data.movies).toHaveLength(3);
    expect(response.body.data.movies).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Beyond Earth',
        }),
      ])
    );
  });
});

describe('show data', () => {
  test.todo('get all show data');
  test.todo('get recommended shows');
});

describe('user functions', () => {
  test.todo('user can save a favorite movie');
  test.todo('user can save a favorite show');
  test.todo('user can remove a favorite movie');
  test.todo('user can remove a favorite show');
});
