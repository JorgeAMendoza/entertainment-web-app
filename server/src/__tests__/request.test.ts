// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';
import { app } from '../index';
import movieService from '../database/services/movie-service';
import showService from '../database/services/show-service';
import userService from '../database/services/user-service';
import Movie from '../database/schemas/movie';
import Show from '../database/schemas/show';
import User from '../database/schemas/user';
import movieData from '../utils/movie-data';
import showData from '../utils/show-data';
import userData from '../utils/user-data';

const api = supertest(app);

beforeEach(async () => {
  await Movie.deleteMany({});
  await Show.deleteMany({});
  await User.deleteMany({});

  const testUser = userData[0];
  const user = new User(testUser);
  await user.save();

  await Movie.insertMany(movieData.slice(0, 3));
  await Show.insertMany(showData.slice(0, 3));
});

describe('User login', () => {
  test.todo('valid user login sent, token returned');
  test.todo('invalid user login, null returned');
});

describe('User sign up', () => {
  test.todo('new user signs up, token is returned');
  test.todo('email already used, null returned');
  test.todo('invalid password, null returned');
});

describe('movie data', () => {
  test.todo('get all movie data');
  test.todo('get recommended movies');
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
