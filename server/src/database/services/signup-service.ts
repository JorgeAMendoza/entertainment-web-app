import User from '../schemas/user';
import * as jwt from 'jsonwebtoken';
import { hashSync } from 'bcrypt';

interface SignUpUserArgs {
  email: string;
  password: string;
  name: string;
}

const signUpUser = async ({ email, password, name }: SignUpUserArgs) => {
  const user = await User.findOne({ email });
  if (user !== null) throw new Error('Email is taken');

  const userPasswordHash = hashSync(password, 10);

  const newUser = new User({
    email,
    name,
    passwordHash: userPasswordHash,
    bookmarkedMovies: [],
    bookmarkedShows: [],
  });

  const savedUser = await newUser.save();

  const userTokenData = {
    name,
    id: savedUser._id,
  };

  const userToken = jwt.sign(userTokenData, process.env.JWT_SECRET as string);
  return userToken;
};

export default {
  signUpUser,
};
