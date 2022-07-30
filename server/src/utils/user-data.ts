import { hashSync } from 'bcrypt';

const userOnePasswordHash = hashSync('chopper', 10);
const userTwoPasswordHash = hashSync('luffy', 10);
const userData = [
  {
    username: 'jorgeam1998',
    name: 'Jorge A. Mendoza II',
    passwordHash: userOnePasswordHash,
    bookMarkedShows: [],
    bookMarkedMovies: [],
  },
  {
    username: 'isabelmen2004',
    name: 'Isabel Mendoza',
    passwordHash: userTwoPasswordHash,
    bookMarkedShows: [],
    bookMarkedMovies: [],
  },
];

export default userData;
