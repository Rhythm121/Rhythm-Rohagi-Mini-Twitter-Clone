import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tweets').then((response) => {
      setTweets(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Tweets</h2>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            <strong>{tweet.username}:</strong> {tweet.tweetText}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetList;


