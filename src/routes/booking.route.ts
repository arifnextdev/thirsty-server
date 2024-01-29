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

///get booking

//delete a booking
bookingRouter.delete(
  '/:bid',
  authInstance.isAuthhenticated,
  bookingInstance.deleteABooking
);
bookingRouter.get(
  '/:bid',
  authInstance.isAuthhenticated,
  bookingInstance.getSingleBooking
);

//get all booking
bookingRouter.get(
  '/',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  bookingInstance.getAllBooking
);

export default bookingRouter;
