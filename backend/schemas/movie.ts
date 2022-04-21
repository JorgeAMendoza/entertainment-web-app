import mongoose from 'mongoose';

type MovieRatingTypes = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';

interface MovieInterfaceType {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  rating: MovieRatingTypes;
  isTrending: boolean;
}

const movieSchema = new mongoose.Schema<MovieInterfaceType>({
  title: String,
  thumbnail: {
    trending: {
      small: String,
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
  isTrending: Boolean,
});

module.exports = mongoose.model('Movie', movieSchema);
