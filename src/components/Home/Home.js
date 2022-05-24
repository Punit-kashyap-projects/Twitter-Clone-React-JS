import React from "react";
import Tweet from "./Tweet";
import account from "../../pics/user.png";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div id="home">
        <nav>
          <h3>Home</h3>
        </nav>
        <div id="tweetCont">
          <Tweet
            userName={"Punit_Kashyap"}
            verified={true}
            userId={"pk490520620"}
            time={"3h"}
            userPic={account}
            totalMessage={145}
            likes={563}
            reTweet={200}
            tweetText={
              "This is the tweet from the punit kumar kashyap! This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!This is the tweet from the punit kumar kashyap!"
            }
          />

          <Tweet
            userName={"Nikhil Sain"}
            verified={true}
            userId={"nk490520620"}
            time={"2h"}
            userPic={account}
            totalMessage={164545}
            likes={5563}
            reTweet={20640}
            tweetText={"This is the tweet from the Nikhil sain!"}
          />

          <Tweet
            userName={"Ajay Yadav"}
            verified={true}
            userId={"AY490520620"}
            time={"8h"}
            userPic={account}
            totalMessage={16234545}
            likes={555463}
            reTweet={2230640}
            tweetText={
              "This is the tweet from the Ajay Yadav! This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav!This is the tweet from the Ajay Yadav! "
            }
          />

          <Tweet
            userName={"Sumahel"}
            verified={true}
            userId={"nk49052fds0620"}
            time={"22h"}
            userPic={account}
            totalMessage={1645465}
            likes={556543}
            reTweet={2034640}
            tweetText={"This is the tweet from the Sumahel!"}
          />

          <Tweet
            userName={"Shubham"}
            verified={true}
            userId={"SK490520620"}
            time={"6h"}
            userPic={account}
            totalMessage={16445}
            likes={553}
            reTweet={2040}
            tweetText={"This is the tweet from the Shubham!"}
          />

          <Tweet
            userName={"Param"}
            verified={true}
            userId={"PS490520620"}
            time={"2h"}
            userPic={account}
            totalMessage={1545}
            likes={563}
            reTweet={2064}
            tweetText={"This is the tweet from the Param Veer Singh!"}
          />

          <Tweet
            userName={"Sagar Bhoris"}
            verified={true}
            userId={"SB490520620"}
            time={"21h"}
            userPic={account}
            totalMessage={1648545}
            likes={556387}
            reTweet={2064067}
            tweetText={"This is the tweet from the Sagar Bhori!"}
          />
          <Tweet
            userName={"Prateek"}
            verified={true}
            userId={"PD490520620"}
            time={"23h"}
            userPic={account}
            totalMessage={17648545}
            likes={5956387}
            reTweet={20640676}
            tweetText={"This is the tweet from the Prateek!"}
          />
        </div>
      </div>
    </>
  );
}
