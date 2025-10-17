import express      from 'express';
import animalController from '../controllers/animal.controller.js';
//========== VARIABLES =========//
const animalRouter = express.Router();

animalRouter.get('/all', animalController.getAllAnimal);
animalRouter.post('/create', animalController.createAnimal)


export default animalRouter;