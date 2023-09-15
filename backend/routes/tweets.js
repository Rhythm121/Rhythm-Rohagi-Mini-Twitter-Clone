const express = require('express');
const router = express.Router();

// Sample in-memory storage for tweets
const tweets = [];

// POST /api/tweets
router.post('/', (req, res) => {
  const { username, tweetText } = req.body;
  const newTweet = { username, tweetText };
  tweets.push(newTweet);
  res.status(201).json(newTweet);
});

// GET /api/tweets
router.get('/', (req, res) => {
  res.json(tweets);
});

module.exports = router;
