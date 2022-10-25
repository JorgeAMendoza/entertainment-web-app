/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';
import 'dotenv/config';

const baseURL = supertest('http://localhost:4000/graphql');

beforeEach(async () => {
  await baseURL.post('').send({
    operationName: 'Mutation',
    query: 'mutation Mutation {resetDb}',
  });
});

describe('movie content', () => {
  test('movie data returned as JSON', async () => {
    await baseURL
      .post('')
      .send({ query: '{movies {id, title, year, type}}' })
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

describe('show content', () => {
  test('show data returned as JSON', async () => {
    await baseURL
      .post('')
      .send({ query: '{shows {title, year, type}}' })
      .expect('Content-Type', /application\/json/);
  });

  test('all shows returned', async () => {
    const response = await baseURL
      .post('')
      .send({ query: '{shows {title, year, type}}' })
      .expect('Content-Type', /application\/json/);
    expect(response.body.data.shows).toHaveLength(3);
    expect(response.body.data.shows).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'The Diary',
        }),
      ])
    );
  });
});

describe('recommend and trending', () => {
  test('recommened movies and shows returned as JSON', async () => {
    const response = await baseURL
      .post('')
      .send({
        query: `{recommended {content {
        ... on Movie {
          id,
          title,
          type
        }
        ... on Show {
          id,
          title,
          type
        }
      }}}`,
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.data.recommended.content).toHaveLength(2);
  });

  test('trending movies and showws returend as JSON', async () => {
    const response = await baseURL
      .post('')
      .send({
        query: `{trending {content {
        ... on Movie {
          id,
          title,
          type
        }
        ... on Show {
          id,
          title,
        }
      }}}`,
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.data.trending.content).toHaveLength(5);
  });
});
