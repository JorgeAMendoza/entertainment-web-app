import Movie from '../schemas/movie';
import { DbMovie } from '../db';

interface NewMovie {
  title: DbMovie['title'];
  images: DbMovie['images'];
  year: DbMovie['year'];
  rating: DbMovie['rating'];
}

const getAllMovies = async (): Promise<DbMovie[]> => {
  return await Movie.find({});
};

const getMovieById = async (id: string): Promise<DbMovie> => {
  const targetMovie = await Movie.findById(id);
  if (targetMovie !== null) return targetMovie;
  else throw new Error('Movie not found');
};

const insertMovie = async (movie: NewMovie): Promise<DbMovie> => {
  const newMovie = new Movie({
    title: movie.title,
    images: movie.images,
    year: movie.year,
    rating: movie.rating,
  });
  const saveResult = await newMovie.save();
  return saveResult;
};

const deleteMovieById = async (id: string): Promise<void> => {
  const targetMovie = await Movie.findById(id);
  if (targetMovie !== null) await targetMovie.delete();
  else throw new Error('Movie not found');
};

export default {
  getAllMovies,
  getMovieById,
  insertMovie,
  deleteMovieById,
};
