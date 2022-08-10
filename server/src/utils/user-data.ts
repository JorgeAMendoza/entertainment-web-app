import { hashSync } from 'bcrypt';

const userOnePasswordHash = hashSync('chopper', 10);
const userTwoPasswordHash = hashSync('luffy', 10);
const userData = [
  {
    email: 'jorgemendoza2002@gmail.com',
    name: 'Jorge A. Mendoza II',
    passwordHash: userOnePasswordHash,
    bookMarkedShows: [],
    bookMarkedMovies: [],
  },
  {
    email: 'isabelmendoza2002@gmail.com',
    name: 'Isabel Mendoza',
    passwordHash: userTwoPasswordHash,
    bookMarkedShows: [],
    bookMarkedMovies: [],
  },
];

export default userData;
