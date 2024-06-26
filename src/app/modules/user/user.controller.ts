import httpStatus from 'http-status';
import { UserServices } from './user.service';
import { TUser } from './user.interface';
import sendResponse from '../../utils/sendResponse';
import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../../utils/asyncHandler ';

const signUp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, phone, address, role } = req.body as TUser;

    const result = await UserServices.createUser({
      name,
      email,
      password,
      phone,
      address,
      role,
    });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User registered successfully',
      data: result,
    });
  },
);

const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const result = await UserServices.loginUser({ email, password });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User logged in successfully',
      data: result.user,
      token: result.token,
    });
  },
);

export const UserControllers = {
  signUp,
  login,
};
