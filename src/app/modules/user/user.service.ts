import httpStatus from 'http-status';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import config from '../../config';

const createUser = async (userData: TUser) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Check if email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new AppError(httpStatus.CONFLICT, 'Email already exists');
    }

    // Create new user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    await session.commitTransaction();
    await session.endSession();

    newUser[0].password = '';
    return newUser[0];
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, err.message);
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    config.jwt_access_secret as string,
    { expiresIn: config.jwt_access_expires_in },
  );

  user.password = ''; // We can clear password before returning
  return { user, token };
};

// const loginUser = async (payload: TLoginPayload) => {
//   const user = await User.isUserExists(payload.email);

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, 'User does not exist');
//   }

//   if (user.isDeleted) {
//     throw new AppError(httpStatus.NOT_FOUND, 'User is deleted');
//   }

//   if (user.status === 'blocked') {
//     throw new AppError(httpStatus.BAD_REQUEST, 'User is blocked');
//   }

//   const isPasswordCorrect = await user.isPasswordCorrect(payload.password);

//   if (!isPasswordCorrect) {
//     throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Invalid credentials');
//   }

//   const token = user.generateAccessToken();
//   const refreshToken = user.generateRefreshToken();

//   user.refreshToken = refreshToken;
//   await user.save();

//   const data = omitField(user.toObject(), [
//     'password',
//     'createdAt',
//     'updatedAt',
//     'refreshToken',
//     'status',
//     'isDeleted',
//   ]);

//   return { token, refreshToken, data };
// };

export const UserServices = {
  createUser,
  loginUser,
};
