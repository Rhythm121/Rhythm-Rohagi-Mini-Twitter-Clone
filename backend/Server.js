const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample in-memory storage for tweets
const tweets = [];

// Routes
const tweetsRouter = require('./routes/tweets');
app.use('/api/tweets', tweetsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
