import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const UserCard = (props) => {
  console.log("PROPS", props);
  let dateOfBirth = new Date(props.userInfo.dob.date).toLocaleDateString(
    "en-US"
  );
  console.log("Date of birth:", dateOfBirth);

  // SOURCE IS STRING? => SPLIT
  let str1 = "";
  typeof dateOfBirth === "string"
    ? (str1 = dateOfBirth.split("/"))
    : console.log("Nije string");
  let str2 = `${str1[0]}-${str1[1]}-${str1[2]}`;

  return (
    <React.Fragment>
      <Card
        key={props.index}
        style={{
          width: "15rem",
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "0.4rem",
        }}
      >
        <Card.Img variant="top" src={props.userInfo.picture.large} />
        <Card.ImgOverlay>
          <Card.Title
            style={{ color: "white", position: "relative", top: "11rem" }}
          >
            {props.userInfo.name.first}
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text style={{ fontSize: "0.75rem" }}>
            e-mail:&nbsp;{props.userInfo.email}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "0.75rem",
              position: "relative",
              top: "-0.5rem",
            }}
          >
            date of birth:&nbsp;{str2}
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default UserCard;
