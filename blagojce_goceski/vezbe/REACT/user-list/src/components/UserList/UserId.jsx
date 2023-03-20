import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";

const UserId = (props) => {
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

  // CAPITALIZE FIRST LETTER OF NAME AND SURNAME
  let name = props.userInfo.name.first.toString();
  let surname = props.userInfo.name.last.toString();
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const surnameCapitalized = surname.charAt(0).toUpperCase() + surname.slice(1);

  return (
    <React.Fragment>
      <li key={props.index} className={`list-item ${gender && "femaleBg"}`}>
        <div className="div-left">
          <img src={props.userInfo.picture.medium} alt="No image" />
        </div>
        <div className="div-right">
          <h3>
            {nameCapitalized}&nbsp;{surnameCapitalized}
          </h3>
          <h3>
            <HiOutlineMail className="email-icon" />
            &nbsp;{finalMail}
          </h3>
          <h3>
            <FaBirthdayCake className="birthday-icon" />
            &nbsp;{str2}
          </h3>
        </div>
      </li>
    </React.Fragment>
  );
};

export default UserId;
