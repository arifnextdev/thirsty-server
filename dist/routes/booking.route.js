"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middelware_1 = __importDefault(require("../middlewares/auth.middelware"));
const booking_controller_1 = __importDefault(require("../controllers/booking.controller"));
const bookingRouter = express_1.default.Router();
const authInstance = new auth_middelware_1.default();
const bookingInstance = new booking_controller_1.default();
//create a booking
bookingRouter.post('/create/:bid', authInstance.isAuthhenticated, bookingInstance.createABooking);
//get all booking for an user
bookingRouter.put('/read/:uid', authInstance.isAuthhenticated);
//delete a booking
bookingRouter.delete('/:bid', authInstance.isAuthhenticated, bookingInstance.deleteABooking);
//get all booking
bookingRouter.get('/', authInstance.isAuthhenticated, authInstance.isAdmin, bookingInstance.getAllBooking);
exports.default = bookingRouter;
