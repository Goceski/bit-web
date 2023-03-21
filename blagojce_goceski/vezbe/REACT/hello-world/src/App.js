import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./components/HellooWorld.jsx";
import HelloWorldFunc from "./components/HelloWorldFunc";

function App() {
  return (
    <React.Fragment>
      <HelloWorld />
      <HelloWorldFunc />
    </React.Fragment>
  );
}

export default App;
