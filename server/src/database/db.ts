import mongoose, { Document } from 'mongoose';

type bookMarkedShowType = {
  type: mongoose.Types.ObjectId;
  ref: 'Show';
};

type bookMarkedMovieType = {
  type: mongoose.Types.ObjectId;
  ref: 'Movie';
};

type MovieRatingTypes = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';

type ShowRatingTypes =
  | 'TV-Y'
  | 'TV-Y7'
  | 'TV-Y7 FV'
  | 'TV-G'
  | 'TV-PG'
  | 'TV-14'
  | 'TV-MA';

export interface DbUser extends Document {
  username: string;
  name: string;
  passwordHash: string;
  bookmarkedShows: bookMarkedShowType[];
  bookmarkedMovies: bookMarkedMovieType[];
}

export interface DbMovie extends Document {
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

export interface DbShow extends Document {
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
  rating: ShowRatingTypes;
}

// methods to for the database to be used by GraphQL
// next time, look back into how we created the mongo db databse, and the methods used to get what we need.
