import express from 'express';
import { RoomControllers } from './room.controller';
import { USER_ROLE } from '../user/user.constant';
import {
  createRoomValidationSchema,
  updateRoomValidationSchema,
} from './room.validation';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

// Create Room (Only Accessible by Admin)
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(createRoomValidationSchema),
  RoomControllers.createRoom,
);

// Get a Room by ID
router.get('/:id', RoomControllers.getRoom);

// Get All Rooms
router.get('/', RoomControllers.getAllRooms);

// Update Room (Only Accessible by Admin)
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(updateRoomValidationSchema),
  RoomControllers.updateRoom,
);

// Delete a Room (Soft Delete, Only Accessible by Admin)
router.delete('/:id', auth(USER_ROLE.admin), RoomControllers.deleteRoom);

export const RoomRoutes = router;
