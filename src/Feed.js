import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox.js';
import Post from './Post.js';

function Feed() {
  return (
    <div className="feed" >
      {/*  Header */}
    <div className="feed__header" >
        <h1> HOME</h1>
    </div>
     

      {/* Tweet Box  */}

      <TweetBox />

      {/* Post  */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed
