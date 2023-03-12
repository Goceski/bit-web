import React from "react";

const UserId = (props) => {
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
      <li key={props.index} className="list-item">
        <div className="div-left">
          <img src={props.userInfo.picture.medium} alt="No image" />
        </div>
        <div className="div-right">
          <h3>name:&nbsp;{props.userInfo.name.first}</h3>
          <h3>e-mail:&nbsp;{props.userInfo.email}</h3>
          <h3>date of birth:&nbsp;{str2}</h3>
        </div>
      </li>
    </React.Fragment>
  );
};

export default UserId;
