import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ThemeProvider from "react-bootstrap/ThemeProvider";
import "materialize-css/dist/css/materialize.min.css";
import "./userCard.scss";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [usersBackUp, setUsersBackUp] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);

  // UCITAVANJE PODATAKA SA API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      // "https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js"
      .then((res) => res.json())
      .then((json) => {
        // console.log("JSON:", json);
        console.log("JSON.results:", json.results);
        setUsers(json.results);
        setUsersBackUp(json.results);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

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

      setUsers(data);
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
