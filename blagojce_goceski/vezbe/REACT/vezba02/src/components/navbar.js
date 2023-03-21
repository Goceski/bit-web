import React, { Component } from "react";

// Stateless Functional Component
// const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {/* {props.totalCounters} */}
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
