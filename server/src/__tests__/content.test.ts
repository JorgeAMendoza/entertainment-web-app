/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';

const baseURL = supertest('http://localhost:4000/graphql');

describe('movie content', () => {
  test('movie data returned as JSON', async () => {
    await baseURL
      .post('')
      .send({ query: '{movies {title, year, contentType}}' })
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

describe('show content', () => {
  test('show data returned as JSON', async () => {
    await baseURL
      .post('')
      .send({ query: '{shows {title, year, contentType}}' })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all shows returned', async () => {
    const response = await baseURL
      .post('')
      .send({ query: '{shows {title, year, contentType}}' })
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body.data.movies).toHaveLength(3);
    expect(response.body.data.movies).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: '1998',
        }),
      ])
    );
  });
});

describe('recommend and trending', () => {
  test('recommened movies and shows returned as JSON', async () => {
    // need to see how to generate the query
  });

  test('trending movies and shows returend as JSON', async () => {
    // need to see how to generate query
  });
});
