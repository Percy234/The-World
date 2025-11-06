import express from 'express';
const uploadRouter = express.Router();
import { uploadKingdomThumbnail } from '../middlewares/uploadFile.js';

// controller
import uploadController from '../controllers/upload.controller.js';

uploadRouter.post('/kingdom-thumbnail', uploadKingdomThumbnail, uploadController.uploadKingdomThumbnail);

export default uploadRouter;