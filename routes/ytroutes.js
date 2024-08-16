import express from 'express';
import { getVideoInfo } from '../controllers/ytcontroller.js'
import { getProgressInfo } from '../controllers/pcontroller.js'

const router = express.Router();

// Initial
router.get('/video', getVideoInfo);
// Progress
router.post('/progress', getProgressInfo);

export default router;