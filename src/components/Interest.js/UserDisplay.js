import React from "react";
import "./UserDisplay.css";
import verified from "../../pics/verified.png";

export default function UserDisplay(props) {
  return (
    <div className="RandomUser">
      <img src={props.userImg} alt="Reload page" className="profilePic" />

      <div className="RandomUserInfo">
        <div className="flex">
          <span className="white bold">{props.userName}</span>
          {props.verified && (
            <img src={verified} alt="Reload page" className="verified" />
          )}
        </div>
        <p className="grey bold" style={{fontSize: '12px'}}>@{props.userId}</p>
      </div>

      <button className="followBtn">Follow</button>
    </div>
  );
}
