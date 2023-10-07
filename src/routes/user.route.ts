import Express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middelware';
import UserController from '../controllers/user.controller';

const userRouter: Router = Express.Router();

const authInstance = new AuthMiddleware();
const userInstance = new UserController();

//get an user
userRouter.post('/:uid', authInstance.isAuthhenticated, userInstance.getAnUser);

//delete an user
userRouter.delete(
  '/:uid',
  authInstance.isAuthhenticated,
  userInstance.deleteAnUser
);

//update an user
userRouter.put(
  '/:uid',
  authInstance.isAuthhenticated,
  userInstance.updateAnUser
);

//get all users
userRouter.post(
  '/',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  userInstance.getAllUser
);

export default userRouter;
