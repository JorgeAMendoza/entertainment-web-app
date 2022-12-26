/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import request from 'supertest';
import 'dotenv/config';

const baseURL = request('http://localhost:4000/graphql');

beforeEach(async () => {
  await baseURL.post('').send({
    operationName: 'Mutation',
    query: 'mutation Mutation {resetDb}',
  });
});

describe('recommend and trending', () => {
  test('recommened movies and shows returned as JSON', async () => {
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
        query: `{homepage 
          {
            recommended {
              ... on Movie {
                title
              }
              ... on Show {
                title
              }
            }
            trending {
              ... on Movie {
                title
              }
              ... on Show {
                title
              }
            }
          }
        }`,
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.data.homepage.recommended).toHaveLength(2);
  });

  test('trending movies and showws returend as JSON', async () => {
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
        query: `{homepage 
          {
            recommended {
              ... on Movie {
                title
              }
              ... on Show {
                title
              }
            }
            trending {
              ... on Movie {
                title
              }
              ... on Show {
                title
              }
            }
          }
        }`,
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.data.homepage.trending).toHaveLength(5);
  });
});
