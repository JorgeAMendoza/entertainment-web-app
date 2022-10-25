import User from '../schemas/user';
import mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { DbShow, DbUser, DbMovie } from '../db';
import showService from './show-service';
import movieService from './movie-service';
import { AuthenticationError, UserInputError, } from 'apollo-server-core';

interface UserLogin {
  email: string;
  password: string;
}

const loginUser = async ({ email, password }: UserLogin): Promise<string> => {
  const targetUser = await User.findOne({ email });
  if (targetUser === null)
    throw new AuthenticationError('email or password is not valid');

  const correctPassword = await bcrypt.compare(
    password,
    targetUser.passwordHash
  );
  if (!correctPassword) throw new AuthenticationError('email or password is not valid');

  const tokenForUser = {
    email: targetUser.email,
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
  else throw new Error('user not found');
};

const addFavoriteShow = async (
  showId: string,
  user: DbUser
): Promise<DbShow> => {
  if (!mongoose.isValidObjectId(showId))
    throw new UserInputError('show does not exist');
  const favoriteShow = await showService.getShowById(showId);
  if (favoriteShow === null) throw new UserInputError('show does not exist');

  if (user.bookmarkedShows.find((show) => show._id.toString() === showId))
    throw new UserInputError('show already bookmarked');

  user.bookmarkedShows.push({ _id: favoriteShow._id });
  await user.save();
  return favoriteShow;
};

const addFavoriteMovie = async (
  movieId: string,
  user: DbUser
): Promise<DbMovie> => {
  if (!mongoose.isValidObjectId(movieId))
    throw new UserInputError('movie does not exist');
  const favoriteMovie = await movieService.getMovieById(movieId);
  if (favoriteMovie === null) throw new UserInputError('movie does not exist');

  if (user.bookmarkedMovies.find((movie) => movie._id.toString() === movieId))
    throw new UserInputError('movie already bookmarked');
  user.bookmarkedMovies.push({ _id: favoriteMovie._id });
  await user.save();
  return favoriteMovie;
};

const removeFavoriteShow = async (
  showId: string,
  user: DbUser
): Promise<DbShow> => {
  if (!mongoose.isValidObjectId(showId))
    throw new UserInputError('show does not exist');
  const targetShow = await showService.getShowById(showId);
  if (targetShow === null) throw new Error('show does not exist.');

  if (!user.bookmarkedShows.find((show) => show._id.toString() === showId))
    throw new UserInputError('show is not bookmarked');

  user.bookmarkedShows = user.bookmarkedShows.filter(
    (showID) => showID._id.toString() !== showId
  );
  await user.save();
  return targetShow;
};

const removeFavoriteMovie = async (
  movieId: string,
  user: DbUser
): Promise<DbMovie> => {
  if (!mongoose.isValidObjectId(movieId))
    throw new UserInputError('movie does not exist');
  const targetMovie = await movieService.getMovieById(movieId);
  if (targetMovie === null) throw new Error('movie does not exist.');

  if (!user.bookmarkedMovies.find((movie) => movie._id.toString() === movieId))
    throw new UserInputError('movie is not bookmarked');

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
