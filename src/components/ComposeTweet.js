import React, { useState } from 'react';
import axios from 'axios';

function ComposeTweet() {
  const [tweetText, setTweetText] = useState('');
  const [username, setUsername] = useState('');

  const handleTweetSubmit = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/tweets', {
            username,
            tweetText,
          });
          
          
      console.log('Tweet posted:', response.data);
      // You can reset the input fields or perform any other actions here
    } catch (error) {
      console.error('Error submitting tweet:', error);
    }
  };

  return (
    <div>
      <h2>Compose Tweet</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="Tweet"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      ></textarea>
      <button onClick={handleTweetSubmit}>Submit</button>
    </div>
  );
}

export default ComposeTweet;

