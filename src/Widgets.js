import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterVideoEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1483427664518164485"} /> 

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NuclearRodBomb"
          options={{ height: 400 }}
        />

        <TwitterVideoEmbed
            id={'1483272963419824130'}
        />

        <TwitterShareButton
          url={"https://create-react-app.dev/"}
          options={{ text: "#reactjs to the moon", via: "reactjs" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
