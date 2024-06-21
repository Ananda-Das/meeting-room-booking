import { Document, Types } from 'mongoose';

export interface TBooking extends Document {
  room: Types.ObjectId;
  slots: Types.ObjectId[];
  user: Types.ObjectId;
  date: string;
  totalAmount: number;
  isConfirmed: string;
  isDeleted: boolean;
}
