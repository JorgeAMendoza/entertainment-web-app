import { hashSync } from 'bcrypt';

const userOnePasswordHash = hashSync('Chopper!?990', 10);
const userTwoPasswordHash = hashSync('Luffy!?2020', 10);
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
