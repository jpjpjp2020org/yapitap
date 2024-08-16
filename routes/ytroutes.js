import express from 'express';
import { getVideoInfo } from '../controllers/ytcontroller.js'

const router = express.Router();

router.get('/video', getVideoInfo);

export default router;