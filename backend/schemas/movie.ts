import { Schema, model, Document } from 'mongoose';

type MovieRatingTypes = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';

interface Movie extends Document {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      medium: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  rating: MovieRatingTypes;
}

const movieSchema: Schema = new Schema({
  title: String,
});

export const Movie = model<Movie>('Movie', movieSchema);
