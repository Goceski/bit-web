import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Reload from "./Reload/Reload";

const Main = (props) => {
  // console.log("PROPS MAIN:", props);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home value={props.value} funcTrue={props.funcTrue} />}
      ></Route>
      <Route
        path="/about"
        element={<About funcFalse={props.funcFalse} />}
      ></Route>
      <Route
        path="/reload"
        element={<Reload funcTrue={props.funcTrue} />}
      ></Route>
    </Routes>
  );
};

export default Main;
