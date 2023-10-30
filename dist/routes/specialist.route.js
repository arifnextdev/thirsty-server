"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const specialist_controller_1 = __importDefault(require("../controllers/specialist.controller"));
const auth_middelware_1 = __importDefault(require("../middlewares/auth.middelware"));
const specialistRouter = express_1.default.Router();
const authInstance = new auth_middelware_1.default();
const specialistInstance = new specialist_controller_1.default();
// get all specialist
specialistRouter.get('/', specialistInstance.getAllSpecialists);
//get single specialist
specialistRouter.get('/:sid', specialistInstance.getAnSpecialist);
//create specialist
specialistRouter.post('/:bid', authInstance.isAuthhenticated, authInstance.isAdmin, specialistInstance.createASpecialist);
//update specialist
specialistRouter.put('/:sid', authInstance.isAuthhenticated, authInstance.isAdmin, specialistInstance.updateASpecialist);
//delete specialist
specialistRouter.delete('/:sid', authInstance.isAuthhenticated, authInstance.isAdmin, specialistInstance.deleteASpecialist);
exports.default = specialistRouter;
