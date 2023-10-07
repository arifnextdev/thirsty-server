import express, { Router } from 'express';

const bookingRouter: Router = express.Router();

//get all bookings
bookingRouter.get('/');

//get a single booking
bookingRouter.get('/:bid');

//create a booking
bookingRouter.post('/');

//update  a booking
bookingRouter.put('/:bid');

//delete a booking
bookingRouter.delete('/:bid');

export default bookingRouter;
