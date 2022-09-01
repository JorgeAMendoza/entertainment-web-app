/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';
import mongoose from 'mongoose';
import 'dotenv/config';
import Show from '../database/schemas/show';
import Movie from '../database/schemas/movie';
import movieData from '../utils/movie-data';
import showData from '../utils/show-data';

const baseURL = supertest('http://localhost:4000/graphql');

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL_TEST as string);
  await Movie.insertMany(movieData);
  await Show.insertMany(showData);
});

afterEach(async () => {
  await Movie.deleteMany({});
  await Show.deleteMany({});
  await mongoose.connection.close();
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
    expect(response.body.data.movies).toHaveLength(15);
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
    expect(response.body.data.shows).toHaveLength(14);
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
        }
      }}}`,
      })
      .expect('Content-Type', /application\/json/);

    expect(response.body.data.recommended.content).toHaveLength(14);
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
