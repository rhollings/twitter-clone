import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [count, setCount] = useState(8); // because i've already added tweets via db

  const validateInput = ({ tweetMessage }) => {
    if (!tweetMessage.trim()) {
      return false;
    }
    return true;
  };

  const sendTweet = (e) => {
    e.preventDefault();

    const validInput = validateInput({ tweetMessage });

    if (!validInput) {
      return null;
    }

    db.collection("posts").add({
      displayName: "Richard Grayson",
      username: "notNightwing",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.ytimg.com/vi/Y8imNSyccwg/maxresdefault.jpg",
      date: count,
    });

    setTweetMessage("");
    setTweetImage("");
    setCount(count + 1);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.ytimg.com/vi/Y8imNSyccwg/maxresdefault.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          required="required"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
