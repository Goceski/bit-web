import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ThemeProvider from "react-bootstrap/ThemeProvider";

const UserListVar2 = () => {
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
        // <Container fluid>
        // <ThemeProvider
        //   breakpoints={["xxl", "xl", "lg", "md", "sm"]}
        //   minBreakpoint="sm"
        // >
        <Container>
          {/* <Col sm="auto" md="auto" lg="auto" xl="auto" xxl="auto"> */}
          <Row className="card-container">
            {users.map((user, index) => (
              <UserCard index={index} userInfo={user} />
            ))}
          </Row>
          {/* </Col> */}
        </Container>
        // </ThemeProvider>
      )}
    </React.Fragment>
  );
};

export default UserListVar2;
