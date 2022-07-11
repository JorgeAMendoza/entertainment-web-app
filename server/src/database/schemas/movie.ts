import mongoose from 'mongoose';
import { DbMovie } from '../db';

const movieSchema = new mongoose.Schema<DbMovie>({
  title: String,
  thumbnail: {
    trending: {
      small: String,
      medium: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: Number,
  rating: String,
});

export default mongoose.model<DbMovie>('Movie', movieSchema);
