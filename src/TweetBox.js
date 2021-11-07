import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="What's Happening?" type='text' ></input>
           </div>
           <input className="tweetBox__imageinput" placeholder="Enter Image Url " type="text" ></input>
        <Button className="tweetBox__button" >Tweet</Button>
      </form> 
      
    </div>
  )
}

export default TweetBox
