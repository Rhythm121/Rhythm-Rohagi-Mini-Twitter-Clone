import React from 'react';
import ComposeTweet from './components/ComposeTweet';
import TweetList from './components/Tweet';

function App() {
  return (
    <div className="App">
      <h1>Mini Twitter Clone</h1>
      <ComposeTweet />
      <TweetList />
    </div>
  );
}

export default App;

