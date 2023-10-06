import express, { Router } from 'express';

const beautyPackageRouter: Router = express.Router();

//get all beauty packages
beautyPackageRouter.get('/');

//get all bookings
beautyPackageRouter.get('/read');

//get a beautypackage
beautyPackageRouter.get('/:bid');

//create a beauty package
beautyPackageRouter.get('/create');

//update a beauty package
beautyPackageRouter.put('/:bid');

//delete a beauty package
beautyPackageRouter.delete('/:bid');

export default beautyPackageRouter;
