import express, { Router } from 'express';

const specialistRouter: Router = express.Router();

// get all specialist
specialistRouter.get('/');

//get single specialist

specialistRouter.get('/:sid');

//add specialist

specialistRouter.post('/');

//update specialist
specialistRouter.put('/:sid');
//delete specialist
specialistRouter.delete('/:sid');

export default specialistRouter;
