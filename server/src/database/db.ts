import { Document } from 'mongoose';

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
  email: string;
  name: string;
  passwordHash: string;
  bookmarkedShows: string[];
  bookmarkedMovies: string[];
}

export interface DbMovie extends Document {
  id: string;
  title: string;
  images: {
    small: string;
    medium: string;
    large: string;
  };
  year: number;
  rating: MovieRatingTypes;
}

export interface DbShow extends Document {
  id: string;
  title: string;
  images: {
    small: string;
    medium: string;
    large: string;
  };
  year: number;
  rating: ShowRatingTypes;
}
