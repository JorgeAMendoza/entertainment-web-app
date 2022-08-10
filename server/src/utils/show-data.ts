import { Show } from '../apollo/resolvers-types.generated';

const showData: Omit<Show, 'id' | '__typename'>[] = [
  {
    title: 'Undiscovered Cities',
    images: {
      small: 'static/thumbnails/undiscovered-cities/small.jpg',
      medium: 'static/thumbnails/undiscovered-cities/medium.jpg',
      large: 'static/thumbnails/undiscovered-cities/large.jpg',
    },
    year: 2019,
    rating: 'TV-Y',
    type: 'show',
  },
  {
    title: 'Dark Side of the Moon',
    images: {
      small: 'static/thumbnails/dark-side-of-the-moon/small.jpg',
      medium: 'static/thumbnails/dark-side-of-the-moon/medium.jpg',
      large: 'static/thumbnails/dark-side-of-the-moon/large.jpg',
    },
    year: 2018,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'The Diary',
    images: {
      small: 'static/thumbnails/the-diary/small.jpg',
      medium: 'static/thumbnails/the-diary/medium.jpg',
      large: 'static/thumbnails/the-diary/large.jpg',
    },
    year: 2019,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'During the Hunt',
    images: {
      small: 'static/thumbnails/during-the-hunt/small.jpg',
      medium: 'static/thumbnails/during-the-hunt/medium.jpg',
      large: 'static/thumbnails/during-the-hunt/large.jpg',
    },
    year: 2016,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'Autosport the Series',
    images: {
      small: 'static/thumbnails/autosport-the-series/small.jpg',
      medium: 'static/thumbnails/autosport-the-series/medium.jpg',
      large: 'static/thumbnails/autosport-the-series/large.jpg',
    },
    year: 2016,
    rating: 'TV-MA',
    type: 'show',
  },
  {
    title: 'Below Echo',
    images: {
      small: 'static/thumbnails/below-echo/small.jpg',
      medium: 'static/thumbnails/below-echo/medium.jpg',
      large: 'static/thumbnails/below-echo/large.jpg',
    },
    year: 2016,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'The Rockies',
    images: {
      small: 'static/thumbnails/the-rockies/small.jpg',
      medium: 'static/thumbnails/the-rockies/medium.jpg',
      large: 'static/thumbnails/the-rockies/large.jpg',
    },
    year: 2015,
    rating: 'TV-G',
    type: 'show',
  },
  {
    title: 'Community of Ours',
    images: {
      small: 'static/thumbnails/community-of-ours/small.jpg',
      medium: 'static/thumbnails/community-of-ours/medium.jpg',
      large: 'static/thumbnails/community-of-ours/large.jpg',
    },
    year: 2018,
    rating: 'TV-MA',
    type: 'show',
  },
  {
    title: '112',
    images: {
      small: 'static/thumbnails/112/small.jpg',
      medium: 'static/thumbnails/112/medium.jpg',
      large: 'static/thumbnails/112/large.jpg',
    },
    year: 2013,
    rating: 'TV-14',
    type: 'show',
  },
  {
    title: 'Production Line',
    images: {
      small: 'static/thumbnails/production-line/small.jpg',
      medium: 'static/thumbnails/production-line/medium.jpg',
      large: 'static/thumbnails/production-line/large.jpg',
    },
    year: 2018,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'Dogs',
    images: {
      small: 'static/thumbnails/dogs/small.jpg',
      medium: 'static/thumbnails/dogs/medium.jpg',
      large: 'static/thumbnails/dogs/large.jpg',
    },
    year: 2016,
    rating: 'TV-G',
    type: 'show',
  },
  {
    title: 'Asia in 24 Days',
    images: {
      small: 'static/thumbnails/asia-in-24-days/small.jpg',
      medium: 'static/thumbnails/asia-in-24-days/medium.jpg',
      large: 'static/thumbnails/asia-in-24-days/large.jpg',
    },
    year: 2020,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'The Tasty Tour',
    images: {
      small: 'static/thumbnails/the-tasty-tour/small.jpg',
      medium: 'static/thumbnails/the-tasty-tour/medium.jpg',
      large: 'static/thumbnails/the-tasty-tour/large.jpg',
    },
    year: 2016,
    rating: 'TV-PG',
    type: 'show',
  },
  {
    title: 'Unresolved Cases',
    images: {
      small: 'static/thumbnails/unresolved-cases/small.jpg',
      medium: 'static/thumbnails/unresolved-cases/medium.jpg',
      large: 'static/thumbnails/unresolved-cases/large.jpg',
    },
    year: 2018,
    rating: 'TV-MA',
    type: 'show',
  },
];

export default showData;
