"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middelware_1 = __importDefault(require("../middlewares/auth.middelware"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = express_1.default.Router();
const authInstance = new auth_middelware_1.default();
const userInstance = new user_controller_1.default();
//get an user
userRouter.get('/:uid', authInstance.isAuthhenticated, userInstance.getAnUser);
//delete an user
userRouter.delete('/:uid', authInstance.isAuthhenticated, userInstance.deleteAnUser);
//update an user
userRouter.put('/:uid', authInstance.isAuthhenticated, userInstance.updateAnUser);
//get all usersz
userRouter.get('/', authInstance.isAuthhenticated, authInstance.isAdmin, userInstance.getAllUser);
exports.default = userRouter;
