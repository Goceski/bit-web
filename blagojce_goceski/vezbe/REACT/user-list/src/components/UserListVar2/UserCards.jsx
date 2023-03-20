import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ThemeProvider from "react-bootstrap/ThemeProvider";
import "materialize-css/dist/css/materialize.min.css";
import "./userCard.scss";

const UserCards = (props) => {
  // console.log("USERCARDS PROPS", props);

  // GET USERS FROM LOCAL STORAGE
  const reactUsers = JSON.parse(localStorage.getItem("reactUsers"));

  const [users, setUsers] = useState(reactUsers);
  const [usersBackUp, setUsersBackUp] = useState(reactUsers);
  const [inputValue, setInputValue] = useState("");
  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);

  // console.log("USERS", users);
  // console.log("USERS BACKUP", usersBackUp);

  // !!! LOGIKA ZA USER SEARCH !!! -------------------------------
  useEffect(() => {
    const dataSearch = [...usersBackUp];

    if (inputValue.length > 0) {
      const data = dataSearch.filter((item) => {
        console.log("ITEM", item);
        console.log("SEARCH TEXT:", inputValue);
        let firstName = item.name.first.toLowerCase();
        let lastName = item.name.last.toLowerCase();
        let name = firstName + " " + lastName;
        console.log("NAME", name);

        return name.includes(inputValue);
      });

      // NO USER MATCH INPUT STRING --------------------
      if (data.length > 0) {
        setUsers(data);
        props.userMatch(true);
      } else {
        setUsers(data);
        props.userMatch(false);
      }
      // -----------------------------------------------
    } else {
      setUsers(usersBackUp);
    }
  }, [inputValue]);
  // !!! KRAJ LOGIKE ZA SEARCH -----------------------------------

  // MALE - FEMALE NUMBERS ---------------------
  useEffect(() => {
    setMaleNumber(users.filter((x) => x.gender === "male").length);
    setFemaleNumber(users.filter((x) => x.gender === "female").length);
  }, [users]);
  // -------------------------------------------

  return (
    <div className="general">
      {/* DEO SEARCH BAR */}
      <>
        <div className="row search-bar justify-content-center">
          <div className="col-9">
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <span className="search-logo">
                    <i className="material-icons">search</i>
                  </span>
                  <input
                    className="search-input"
                    id="search"
                    type="search"
                    placeholder="Search users"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  ></input>
                  {/* <label className="label-icon" for="search">
                    <i className="material-icons">search</i>
                  </label> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
      {/* KRAJ SEARCH BAR */}
      {/* DEO male: female: */}
      <>
        <div className="row justify-content-center">
          <h6 className="male-female col-9">{`Male: ${maleNumber} Female: ${femaleNumber}`}</h6>
        </div>
      </>
      {/* KRAJ male: female */}
      {/* DEO USER CARDS */}
      <>
        {users.length > 0 && (
          <React.Fragment>
            <div className="container">
              <div className="card-container col s12 m8 l8 xl6">
                {/* Kad se ne koristi RETURN koriste se obicne zagrade */}
                {users.map((user, index) => (
                  <UserCard index={index} userInfo={user} />
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </>
      <>
        {/* BOOTSTRAP */}
        {/* {users.length > 0 && (
          <Container>
            <Row className="card-container"> */}
        {/* Kad se ne koristi RETURN koriste se obicne zagrade */}
        {/* {users.map((user, index) => (
                <UserCard index={index} userInfo={user} />
              ))}
            </Row>
          </Container>
        )} */}
      </>
      {/* KRAj USER CARDS */}
    </div>
  );
};

export default UserCards;
