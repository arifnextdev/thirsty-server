import express, { Router } from 'express';
import SpecialistController from '../controllers/specialist.controller';
import AuthController from '../controllers/auth.controller';
import AuthMiddleware from '../middlewares/auth.middelware';

const specialistRouter: Router = express.Router();
const authInstance = new AuthMiddleware();
const specialistInstance = new SpecialistController();

// get all specialist
specialistRouter.get('/', specialistInstance.getAllSpecialists);

//get single specialist

specialistRouter.get('/:sid', specialistInstance.getAnSpecialist);
//create specialist

specialistRouter.post(
  '/:bid',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  specialistInstance.createASpecialist
);

//update specialist
specialistRouter.put(
  '/:sid',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  specialistInstance.updateASpecialist
);
//delete specialist
specialistRouter.delete(
  '/:sid',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  specialistInstance.deleteASpecialist
);

export default specialistRouter;
