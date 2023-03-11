import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaUser, FaRegClock } from "react-icons/fa";
// npm install react-icons --save

const UserId = (props) => {
  console.log("UserID", props);
  // props.userId
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.userId}.json?print=pretty`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("JSON:", json);
        setUserInfo((userInfo) => ({ ...userInfo, ...json }));
        const podaci = { ...userInfo };
        console.log("PODACI", podaci);
      })
      .catch((eroor) => {
        console.log("Error", eroor);
      });
  }, [props]);

  // TIME
  let currentDate = new Date();
  let currentDateHours = currentDate.getHours();
  let d = new Date(userInfo.time);
  let time = d.getHours();

  // SOURCE
  let str1 = userInfo.url.split("/");
  console.log("ARRAY", str1);

  return (
    <li key={props.index}>
      <div className="container">
        <div className="left">
          <h4>{props.index + 1}.</h4>
        </div>
        <div className="right">
          <div className="right-up">
            <h5 className="title">{userInfo.title}</h5>
            <h6 className="source">({str1[2]})</h6>
          </div>
          <div className="right-down">
            <FaHeart className="points-icon" />
            <h5 className="points">{userInfo.score} points</h5>
            <FaUser className="by-icon" />
            <h5 className="by">{userInfo.by}</h5>
            <FaRegClock className="time-icon" />

            <h5 className="time">{currentDateHours - time} hours ago</h5>
            <h5 className="comments">{userInfo.descendants} comments</h5>
            {/* {props.userId} */}
          </div>
        </div>
      </div>
      <hr></hr>
    </li>
  );
};

export default UserId;
