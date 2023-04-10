import { hashSync } from 'bcrypt';

const userOnePasswordHash = hashSync('Chopper!?990', 10);
const userData = [
  {
    email: 'testuser@gmail.com',
    name: 'Monkey D. Luffy',
    passwordHash: userOnePasswordHash,
    bookMarkedShows: [],
    bookMarkedMovies: [],
  },
];

export default userData;
