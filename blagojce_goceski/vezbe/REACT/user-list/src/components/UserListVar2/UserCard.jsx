import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
import "materialize-css/dist/css/materialize.min.css";

const UserCard = (props) => {
  // console.log("PROPS", props);

  // GENDER RELATED BACKGROUND COLOR
  // OPTIONAL CHAINING '?' DOBRO UKOLIKO NE ZNAM DA LI POSTOJE UGNJEZDENI 'KEY - VALUE'
  const gen = props?.userInfo?.gender;
  const [gender, setGender] = useState(true);
  useEffect(() => {
    gen === "male" ? setGender(false) : setGender(true);
  }, [gen]);

  // E-MAIL
  const [finalMail, setFinalMail] = useState(props.userInfo.email);
  useEffect(() => {
    const [name, domain] = props?.userInfo?.email.split("@");
    const first3 = name.slice(0, 3);
    const last3 = name.slice(-3);
    const eMail = `${first3} . . . ${last3}@${domain}`;
    setFinalMail(eMail);
  }, [props]);

  // DATE OF BIRTH
  let dateOfBirth = new Date(props?.userInfo?.dob?.date).toLocaleDateString(
    "en-US"
  );
  dateOfBirth.toString();
  let str1 = dateOfBirth.split("/");
  let day = str1[1].length > 1 ? str1[1] : "0" + str1[1];
  let month = str1[0].length > 1 ? str1[0] : "0" + str1[0];
  let str2 = `${day}.${month}.${str1[2]}`;

  return (
    <React.Fragment>
      {/* CARD MATERIALIZE */}
      <>
        <div
          className={`card small hoverable ${gender ? "red lighten-5" : ""}`}
          key={props.index}
          style={{
            width: "15rem",
            paddingLeft: "0px",
            paddingRight: "0px",
            margin: "0.4rem",
          }}
        >
          <div className="card-image">
            <img src={props.userInfo.picture.large} alt="" />
            <span className="card-title">{props.userInfo.name.first}</span>
          </div>
          <div className="card-content">
            <p>{finalMail}</p>
            <p>Birth date: &nbsp;{str2}</p>
          </div>
        </div>
      </>
      {/* CARD BOOTSTRAP */}
      {/* <>
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
          <Card.Body
            style={{ backgroundColor: `${gender ? "#ffebee" : "white"}` }}
          >
            <Card.Text style={{ fontSize: "1rem" }}>
              {props.userInfo.email}
            </Card.Text>
            <Card.Text
              style={{
                fontSize: "1rem",
                position: "relative",
                top: "-0.5rem",
              }}
            >
              Birth date:&nbsp;{str2}
            </Card.Text>
          </Card.Body>
        </Card>
      </> */}
    </React.Fragment>
  );
};

export default UserCard;
