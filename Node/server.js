require('dotenv').config(); // Load .env variables

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB Connection Failed:', err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
