import React from "react";
import "./MenuBar.css";
// @ts-ignore
import icon from "../../pics/twitterIcon.png";
import home from "../../pics/home.jpg";
import hashtag from "../../pics/hashtag.png";
import bell from "../../pics/bell.png";
import message from "../../pics/message.jpg";
import bookmark from "../../pics/bookmark.png";
import list from "../../pics/list.png";
import account from "../../pics/account.png";
import tweetThree from "../../pics/threeDots.png";
import tweet from "../../pics/tweet.png";

export default function MenuBar() {
  return (
    <>
      <nav id="MenuBar">
        <a href="#" className="menuOpt">
          <img src={icon} alt="Reload page" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={home} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={hashtag} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={bell} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={message} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={bookmark} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={list} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt ">
          <img src={account} alt="Reload page" className="invert" />
        </a>

        <a href="#" className="menuOpt">
          <img src={tweetThree} alt="Reload page" className="invert" />
        </a>

        <button id="tweetBtn">
          <img src={tweet} alt="Reload page" />
        </button>

        <a href="#" id="profileBtn" className="menuOpt">
          <img src={icon} alt="Reload page" />
        </a>
      </nav>
    </>
  );
}
