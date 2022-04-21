import mongoose from 'mongoose';

type bookMarkedShowType = {
  type: mongoose.Types.ObjectId;
  ref: 'Show';
};

type bookMarkedMovieType = {
  type: mongoose.Types.ObjectId;
  ref: 'Movie';
};

interface UserInterface {
  username: string;
  passwordHash: string;
  bookmarkedShows: [bookMarkedShowType];
  bookmarkedMovies: [bookMarkedMovieType];
}

const userSchema = new mongoose.Schema<UserInterface>({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 4,
  },
  passwordHash: String,
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

module.exports = mongoose.model('User', userSchema);
