import React, { useEffect, useState } from "react";
import "./HackerNews.scss";
import Header from "./Header";
import UserId from "./UserId";

const HackerNews = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUsers(json.slice(0, 10));
      })
      .catch((eroor) => {
        console.log("Error", eroor);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      {users.length > 0 && (
        <ul className="user-list">
          {users.map((user, index) => (
            <React.Fragment>
              {/* {user} */}
              <UserId index={index} userId={user} />
            </React.Fragment>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default HackerNews;
