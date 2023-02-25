import React from "react";
import Logo from "../../images/logo3.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-holder">
        <img width={50} src={Logo} alt="logo" />
        <span>Žobla React</span>
      </div>
    </div>
  );
}
