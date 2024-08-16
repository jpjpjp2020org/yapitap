import express, { json } from 'express';
const app = express();

app.use(json()); // for parsing application/json

import youtubeRoutes from './routes/youtube';
app.use('/youtube', youtubeRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
