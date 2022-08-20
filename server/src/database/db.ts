import { Document, Types } from 'mongoose';

type MovieRatingTypes = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';

type ShowRatingTypes =
  | 'TV-Y'
  | 'TV-Y7'
  | 'TV-Y7 FV'
  | 'TV-G'
  | 'TV-PG'
  | 'TV-14'
  | 'TV-MA';

export interface RefProperty {
  _id: Types.ObjectId;
}

export interface DbUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
  bookmarkedShows: RefProperty[];
  bookmarkedMovies: RefProperty[];
}

export interface DbMovie extends Document {
  _id: Types.ObjectId;
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
  _id: Types.ObjectId;
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
