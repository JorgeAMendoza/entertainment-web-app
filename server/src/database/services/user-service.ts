import User from '../schemas/user';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { DbShow, DbUser, DbMovie } from '../db';
import showService from './show-service';
import movieService from './movie-service';
// import {Types} from 'mongoose'

interface UserLogin {
  email: string;
  password: string;
}

const loginUser = async ({ email, password }: UserLogin): Promise<string> => {
  const targetUser = await User.findOne({ email });
  if (targetUser === null) throw new Error('User not found');

  const correctPassword = await bcrypt.compare(
    password,
    targetUser.passwordHash
  );
  if (!correctPassword) throw new Error('Incorrect password');

  const tokenForUser = {
    username: targetUser.email,
    id: targetUser._id,
  };

  const token = jwt.sign(tokenForUser, process.env.JWT_SECRET as string);
  return token;
};

const getUser = async (id: string): Promise<DbUser> => {
  const targetUser = await User.findById(id).populate(
    'bookmarkedShows',
    'bookmarkedMovies'
  );
  if (targetUser !== null) return targetUser;
  else throw new Error('User not found');
};

const addFavoriteShow = async (
  showId: string,
  user: DbUser
): Promise<DbShow> => {
  const favoriteShow = await showService.getShowById(showId);
  if (favoriteShow === null) throw new Error('Show does not exist');

  user.bookmarkedShows.push({ _id: favoriteShow._id });
  console.log(user.bookmarkedShows);
  await user.save();
  return favoriteShow;
};

const addFavoriteMovie = async (
  movieId: string,
  user: DbUser
): Promise<DbMovie> => {
  const favoriteMovie = await movieService.getMovieById(movieId);
  if (favoriteMovie === null) throw new Error('Movie does not exist.');
  user.bookmarkedMovies.push({ _id: favoriteMovie._id });
  await user.save();
  return favoriteMovie;
};

const removeFavoriteShow = async (
  showId: string,
  user: DbUser
): Promise<DbShow> => {
  const targetShow = await showService.getShowById(showId);
  if (targetShow === null) throw new Error('Show does not exist.');
  user.bookmarkedShows = user.bookmarkedShows.filter(
    (showID) => showID._id.toString() !== targetShow.id
  );
  await user.save();
  return targetShow;
};

const removeFavoriteMovie = async (
  movieId: string,
  user: DbUser
): Promise<DbMovie> => {
  const targetMovie = await movieService.getMovieById(movieId);
  if (targetMovie === null) throw new Error('Movie does not exist.');
  user.bookmarkedMovies = user.bookmarkedMovies.filter(
    (movie) => movie._id.toString() !== targetMovie.id
  );
  await user.save();
  return targetMovie;
};

export default {
  loginUser,
  getUser,
  addFavoriteMovie,
  addFavoriteShow,
  removeFavoriteShow,
  removeFavoriteMovie,
};
