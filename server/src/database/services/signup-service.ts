import User from '../schemas/user';
import * as jwt from 'jsonwebtoken';
import { hashSync } from 'bcrypt';
import validator from 'validator';
import { UserInputError } from 'apollo-server-core';

interface SignUpUserArgs {
  email: string;
  password: string;
  name: string;
}

const signUpUser = async ({ email, password, name }: SignUpUserArgs) => {
  if (!validator.isEmail(email))
    throw new UserInputError('invalid email format provided');
  else if (!validator.isStrongPassword(password))
    throw new UserInputError(
      'invalid password, please provide a stronger password'
    );

  const user = await User.findOne({ email });
  if (user !== null)
    throw new UserInputError(
      'account already exists, please use another email address'
    );

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
