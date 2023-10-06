import Express, { Router } from 'express';

const userRouter: Router = Express.Router();

//get all users
userRouter.post('/');

//get an user
userRouter.post('/:uid');

//delete an user
userRouter.delete('/:uid');

//update an user
userRouter.put('/:uid');

export default userRouter;
