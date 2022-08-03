// eslint-disable-next-line node/no-unpublished-import
import superest from 'supertest';
import { app } from '../index';
import movieService from '../database/services/movie-service';
import showService from '../database/services/show-service';

// const api = supertest(app);

describe('regular test suite', () => {
  test('this test will pass', () => {
    console.log('test passing');
  });
});
