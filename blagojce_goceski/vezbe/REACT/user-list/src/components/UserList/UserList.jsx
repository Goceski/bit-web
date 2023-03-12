import React, { useState, useEffect } from "react";
import UserId from "./UserId";
import "./userList.scss";

const UserList = () => {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON:", json);
        console.log("JSON.results:", json.results);
        SetUsers(json.results);

        console.log("Users:", users);
        // console.log("User[0]:", users[0]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <React.Fragment>
      {users.length > 0 && (
        <ul className="user-list">
          {users.map((user, index) => (
            <UserId index={index} userInfo={user} />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default UserList;
