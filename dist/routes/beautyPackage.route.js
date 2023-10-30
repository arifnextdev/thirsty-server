"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middelware_1 = __importDefault(require("../middlewares/auth.middelware"));
const beutyPackage_controller_1 = __importDefault(require("../controllers/beutyPackage.controller"));
const beautyPackageRouter = express_1.default.Router();
const authInstance = new auth_middelware_1.default();
const beautyPackageInstance = new beutyPackage_controller_1.default();
//get all beauty packages
beautyPackageRouter.get('/', beautyPackageInstance.getAllBeautyPackages);
//get all bookings
beautyPackageRouter.get('/read');
//get a beautypackage
beautyPackageRouter.get('/:bid', beautyPackageInstance.getAnBeautyPackage);
//create a beauty package
beautyPackageRouter.post('/', authInstance.isAuthhenticated, authInstance.isAdmin, beautyPackageInstance.createABeautyPackage);
//update a beauty package
beautyPackageRouter.put('/:bid', authInstance.isAuthhenticated, authInstance.isAdmin, beautyPackageInstance.updateABeautyPackage);
//delete a beauty package
beautyPackageRouter.delete('/:bid', authInstance.isAuthhenticated, authInstance.isAdmin, beautyPackageInstance.deleteABeautyPackage);
exports.default = beautyPackageRouter;
