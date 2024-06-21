import express from 'express';
import { UserControllers } from './user.controller';
import {
  userLoginValidationSchema,
  userSignUpValidationSchema,
} from './user.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

// User Sign Up Route
router.post(
  '/signup',
  validateRequest(userSignUpValidationSchema),
  UserControllers.signUp,
);

// User Login Route
router.post(
  '/login',
  validateRequest(userLoginValidationSchema),
  UserControllers.login,
);

export const UserRoutes = router;
