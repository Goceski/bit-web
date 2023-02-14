import React from "react";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="app-holder">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
