import express, { json } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(json()); // for parsing application/json

import youtubeRoutes from './routes/ytroutes.js';
app.use('/youtube', youtubeRoutes); // mounting the router

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
