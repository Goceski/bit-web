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
        element={
          <Home
            value={props.value}
            funcTrue={props.funcTrue}
            lastUpdateTrue={props.lastUpdateTrue}
          />
        }
      ></Route>
      <Route
        path="/about"
        element={
          <About
            value={props.value}
            funcFalse={props.funcFalse}
            lastUpdateFalse={props.lastUpdateFalse}
          />
        }
      ></Route>
      <Route
        path="/reload"
        element={
          <Reload
            value={props.value}
            funcTrue={props.funcTrue}
            lastUpdateFalse={props.lastUpdateFalse}
          />
        }
      ></Route>
    </Routes>
  );
};

export default Main;
