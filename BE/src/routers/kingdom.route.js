import express          from    'express';
const kingdomRouter     =       express.Router();

// Import controller
import kingdomController from '../controllers/kingdom.controller.js';

// Define routes
kingdomRouter.post('/', kingdomController.createKingDom);
kingdomRouter.get('/', kingdomController.getAllKingDom);

export default kingdomRouter;