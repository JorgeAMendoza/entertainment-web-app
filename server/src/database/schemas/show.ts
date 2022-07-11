import mongoose from 'mongoose';
import { DbShow } from '../db';

const showSchema = new mongoose.Schema<DbShow>({
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

export default mongoose.model<DbShow>('Show', showSchema);
