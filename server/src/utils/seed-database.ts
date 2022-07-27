import Movie from '../database/schemas/movie';
import User from '../database/schemas/user';
import Show from '../database/schemas/show';
import movieData from './movie-data';
import showData from './show-data';
import userData from './user-data';

const seedDB = async () => {
  await Movie.deleteMany({});
  await User.deleteMany({});
  await Show.deleteMany({});

  await Movie.insertMany(movieData);
  await User.insertMany(userData);
  await Show.insertMany(showData);
};

export default seedDB;
