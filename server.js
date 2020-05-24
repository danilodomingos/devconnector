const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running 2!')
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
