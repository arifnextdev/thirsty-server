import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middelware';

const bookingRouter: Router = express.Router();
const authInstance = new AuthMiddleware();

//get all bookings
bookingRouter.get('/');

//create a booking
bookingRouter.post('/', authInstance.isAuthhenticated);

//update  a booking
bookingRouter.put('/:bid', authInstance.isAuthhenticated);

//delete a booking
bookingRouter.delete('/:bid', authInstance.isAuthhenticated);

//get a single booking
bookingRouter.get('/:bid', authInstance.isAuthhenticated, authInstance.isAdmin);

export default bookingRouter;
