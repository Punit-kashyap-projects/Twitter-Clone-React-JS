import React from "react";
import "./Interest.css";
import search from "../../pics/search.png";
import DisplayCont from "./DisplayCont";
import UserDisplay from "./UserDisplay";

export default function Interest() {
  return (
    <>
      <div id="interestCont">
        <div id="searchBar">
          <img src={search} alt="Reload page" />
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div id="happeningCont">
          <h1>What's happening</h1>
          <DisplayCont
            category="Political Trending."
            img={
              "https://www.livelaw.in/h-upload/2021/08/24/399188-supreme-court-of-india-sc-15.jpg"
            }
            text={
              "Newkjfalksjdflkajs dfasd flasjdflk ajsdf klasdjfl ajsdflk ajsdfl;ka sjdlf;kj asl;"
            }
          />
          <DisplayCont
            category="Political Trending."
            img={
              "https://www.livelaw.in/h-upload/2021/08/24/399188-supreme-court-of-india-sc-15.jpg"
            }
            text={
              "Newkjfalksjdflkajs dfasd flasjdflk ajsdf klasdjfl ajsdflk ajsdfl;ka sjdlf;kj asl;"
            }
          />
          <DisplayCont
            category="Political Trending."
            img={
              "https://www.livelaw.in/h-upload/2021/08/24/399188-supreme-court-of-india-sc-15.jpg"
            }
            text={
              "Newkjfalksjdflkajs dfasd flasjdflk ajsdf klasdjfl ajsdflk ajsdfl;ka sjdlf;kj asl;"
            }
          />
          <DisplayCont
            category="Political Trending."
            img={
              "https://www.livelaw.in/h-upload/2021/08/24/399188-supreme-court-of-india-sc-15.jpg"
            }
            text={
              "Newkjfalksjdflkajs dfasd flasjdflk ajsdf klasdjfl ajsdflk ajsdfl;ka sjdlf;kj asl;"
            }
          />

          <button className="showMore">Show More</button>
        </div>

        <div id="followSuggestions">
          <h1>Who to follow</h1>
          <UserDisplay
            verified={true}
            userName={"Ajay Yadav"}
            userId={"AJ94525"}
            userImg={
              "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"
            }
          />
          
          <UserDisplay
            verified={true}
            userName={"Sumahel"}
            userId={"S94525"}
            userImg={
              "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"
            }
          />

        </div>
      </div>
    </>
  );
}
