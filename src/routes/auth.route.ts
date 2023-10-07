import Express, { Router } from 'express';

const authRouter: Router = Express.Router();

//register
authRouter.post('/register');

//login
authRouter.post('/login');

export default authRouter;
