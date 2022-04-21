import mongoose from 'mongoose';

type ShowRatingTypes =
  | 'TV-Y'
  | 'TV-Y7'
  | 'TV-Y7 FV'
  | 'TV-G'
  | 'TV-PG'
  | 'TV-14'
  | 'TV-MA';

interface ShowInterfaceTypes {
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
  isTrending: boolean;
}

const showSchema = new mongoose.Schema<ShowInterfaceTypes>({
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

module.exports = mongoose.model('Show', showSchema);
