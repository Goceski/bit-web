import React, { useState } from "react";
import "./header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import ToggleButton from "react-bootstrap/ToggleButton";
// REACT ICONS:
// import { FaThList } from "react-icons/fa";
// import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const Header = (props) => {
  const [value, setValue] = useState(true);

  const handleValue = () => {
    value ? setValue(false) : setValue(true);
    console.log("VALUE", value);
    console.log("props", props);
    props.func(value);
  };

  return (
    <React.Fragment>
      <nav className="nav-bar">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo left">
            React Users
          </a>
          {/* <ul id="nav-mobile" class="right hide-on-med-and-down"> */}
          <ul id="nav-mobile" className="right">
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="collapsible.html">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li variant="flat" onClick={handleValue}>
              <a className="waves-effect waves-teal btn-flat">
                {value ? (
                  // GOOGLE ICONS
                  <i className="material-icons">view_module</i>
                ) : (
                  <i className="material-icons">view_list</i>
                )}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
