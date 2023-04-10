import { Movie } from '../apollo/resolvers-types.generated';

const movieData: Omit<Movie, 'id' | '__typename' | 'bookmarked'>[] = [
  {
    title: 'Beyond Earth',
    images: {
      small: 'static/thumbnails/beyond-earth/small.jpg',
      medium: 'static/thumbnails/beyond-earth/medium.jpg',
      large: 'static/thumbnails/beyond-earth/large.jpg',
    },
    year: 2019,
    rating: 'PG',
    type: 'movie',
  },
  {
    title: 'Bottom Gear',
    images: {
      small: 'static/thumbnails/bottom-gear/small.jpg',
      medium: 'static/thumbnails/bottom-gear/medium.jpg',
      large: 'static/thumbnails/bottom-gear/large.jpg',
    },
    year: 2021,
    rating: 'PG',
    type: 'movie',
  },
  {
    title: '1998',
    images: {
      small: 'static/thumbnails/1998/small.jpg',
      medium: 'static/thumbnails/1998/medium.jpg',
      large: 'static/thumbnails/1998/large.jpg',
    },
    year: 2021,
    rating: 'R',
    type: 'movie',
  },
  {
    title: 'The Great Lands',
    images: {
      small: 'static/thumbnails/the-great-lands/small.jpg',
      medium: 'static/thumbnails/the-great-lands/medium.jpg',
      large: 'static/thumbnails/the-great-lands/large.jpg',
    },
    year: 2019,
    rating: 'G',
    type: 'movie',
  },
  {
    title: "Earth's Untouched",
    images: {
      small: 'static/thumbnails/earths-untouched/small.jpg',
      medium: 'static/thumbnails/earths-untouched/medium.jpg',
      large: 'static/thumbnails/earths-untouched/large.jpg',
    },
    year: 2017,
    rating: 'R',
    type: 'movie',
  },
  {
    title: 'No Land Beyond',
    images: {
      small: 'static/thumbnails/no-land-beyond/small.jpg',
      medium: 'static/thumbnails/no-land-beyond/medium.jpg',
      large: 'static/thumbnails/no-land-beyond/large.jpg',
    },
    year: 2019,
    rating: 'G',
    type: 'movie',
  },
  {
    title: 'Same Answer II',
    images: {
      small: 'static/thumbnails/same-answer-2/small.jpg',
      medium: 'static/thumbnails/same-answer-2/medium.jpg',
      large: 'static/thumbnails/same-answer-2/large.jpg',
    },
    year: 2017,
    rating: 'G',
    type: 'movie',
  },
  {
    title: 'Relentless',
    images: {
      small: 'static/thumbnails/relentless/small.jpg',
      medium: 'static/thumbnails/relentless/medium.jpg',
      large: 'static/thumbnails/relentless/large.jpg',
    },
    year: 2017,
    rating: 'PG-13',
    type: 'movie',
  },
  {
    title: 'Van Life',
    images: {
      small: 'static/thumbnails/van-life/small.jpg',
      medium: 'static/thumbnails/van-life/medium.jpg',
      large: 'static/thumbnails/van-life/large.jpg',
    },
    year: 2015,
    rating: 'PG',
    type: 'movie',
  },
  {
    title: 'The Heiress',
    images: {
      small: 'static/thumbnails/the-heiress/small.jpg',
      medium: 'static/thumbnails/the-heiress/medium.jpg',
      large: 'static/thumbnails/the-heiress/large.jpg',
    },
    year: 2021,
    rating: 'PG',
    type: 'movie',
  },
  {
    title: 'Off the Track',
    images: {
      small: 'static/thumbnails/off-the-track/small.jpg',
      medium: 'static/thumbnails/off-the-track/medium.jpg',
      large: 'static/thumbnails/off-the-track/large.jpg',
    },
    year: 2017,
    rating: 'R',
    type: 'movie',
  },
  {
    title: 'Whispering Hill',
    images: {
      small: 'static/thumbnails/whispering-hill/small.jpg',
      medium: 'static/thumbnails/whispering-hill/medium.jpg',
      large: 'static/thumbnails/whispering-hill/large.jpg',
    },
    year: 2017,
    rating: 'PG',
    type: 'movie',
  },
  {
    title: 'Lone Heart',
    images: {
      small: 'static/thumbnails/lone-heart/small.jpg',
      medium: 'static/thumbnails/lone-heart/medium.jpg',
      large: 'static/thumbnails/lone-heart/large.jpg',
    },
    year: 2017,
    rating: 'G',
    type: 'movie',
  },
  {
    title: 'Darker',
    images: {
      small: 'static/thumbnails/darker/small.jpg',
      medium: 'static/thumbnails/darker/medium.jpg',
      large: 'static/thumbnails/darker/large.jpg',
    },
    year: 2017,
    rating: 'R',
    type: 'movie',
  },
  {
    title: 'Mission: Saturn',
    images: {
      small: 'static/thumbnails/mission-saturn/small.jpg',
      medium: 'static/thumbnails/mission-saturn/medium.jpg',
      large: 'static/thumbnails/mission-saturn/large.jpg',
    },
    year: 2017,
    rating: 'PG',
    type: 'movie',
  },
];

export default movieData;
