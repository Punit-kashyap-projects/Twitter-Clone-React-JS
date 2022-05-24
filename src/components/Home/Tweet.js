import React from "react";
import "./Tweet.css";
import verified from "../../pics/verified.png";
import message from "../../pics/message.jpg";
import retweet from "../../pics/reTweet.png";
import like from "../../pics/like.png";
import share from "../../pics/share.png"

export default function Tweet(props) {
  return (
    <>
      <div className="tweet">
        <div className="tweetInfo">
          <div className="userProfile">
            <img src={props.userPic} alt="Reload page" className="invert"/>
          </div>

          <div className="userInfo">
            <div className="flex">
              <span className="white bold">
                <a href="#">{props.userName}</a>
              </span>{" "}
              {props.verified && (
                <img src={verified} alt="Reload page" className="verifiedImg" />
              )}
              <span className="grey">@{props.userId}</span>{" "}
              <span className="grey">. {props.time}</span>
            </div>

            <div>{props.tweetText}</div>
            <div className="reactions">

              <div className="reactOpt flex">
                <button>
                  <img src={message} alt="Reload page" />
                </button>
                <span>{props.totalMessage}</span>
              </div>

              <div className="reactOpt flex">
                <button>
                  <img src={retweet} alt="Reload page" />
                </button>
                <span>{props.reTweet}</span>
              </div>

              <div className="reactOpt flex">
                <button>
                  <img src={like} alt="Reload page" />
                </button>
                <span>{props.likes}</span>
              </div>

              <div className="reactOpt flex">
                <button>
                  <img src={share} alt="Reload page" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
