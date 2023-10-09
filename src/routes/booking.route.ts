import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middelware';
import BookingController from '../controllers/booking.controller';

const bookingRouter: Router = express.Router();
const authInstance = new AuthMiddleware();
const bookingInstance = new BookingController();

//create a booking
bookingRouter.post(
  '/create/:bid',
  authInstance.isAuthhenticated,
  bookingInstance.createABooking
);

//get all booking for an user
bookingRouter.put('/read/:uid', authInstance.isAuthhenticated);

//delete a booking
bookingRouter.delete(
  '/:bid',
  authInstance.isAuthhenticated,
  bookingInstance.deleteABooking
);

//get all booking
bookingRouter.get(
  '/',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  bookingInstance.getAllBooking
);

export default bookingRouter;
