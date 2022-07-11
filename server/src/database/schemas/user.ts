import mongoose from 'mongoose';
import { DbUser } from '../db';

const userSchema = new mongoose.Schema<DbUser>({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  bookmarkedShows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Show',
    },
  ],
  bookmarkedMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

export default mongoose.model<DbUser>('User', userSchema);
