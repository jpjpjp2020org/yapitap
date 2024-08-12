const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

const youtubeRoutes = require('./routes/youtube');
app.use('/youtube', youtubeRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
