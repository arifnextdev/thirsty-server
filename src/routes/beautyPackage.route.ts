import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middelware';
import BeautyPackageController from '../controllers/beutyPackage.controller';

const beautyPackageRouter: Router = express.Router();
const authInstance = new AuthMiddleware();
const beautyPackageInstance = new BeautyPackageController();

//get all beauty packages
beautyPackageRouter.get('/', beautyPackageInstance.getAllBeautyPackages);

//get all bookings
beautyPackageRouter.get('/read');

//get a beautypackage
beautyPackageRouter.get('/:bid', beautyPackageInstance.getAnBeautyPackage);

//create a beauty package
beautyPackageRouter.post(
  '/',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  beautyPackageInstance.createABeautyPackage
);

//update a beauty package
beautyPackageRouter.put(
  '/:bid',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  beautyPackageInstance.updateABeautyPackage
);

//delete a beauty package
beautyPackageRouter.delete(
  '/:bid',
  authInstance.isAuthhenticated,
  authInstance.isAdmin,
  beautyPackageInstance.deleteABeautyPackage
);

export default beautyPackageRouter;
