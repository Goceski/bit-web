import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Reload from "./Reload/Reload";

const Main = (props) => {
  console.log("VALUE in MAIN:", props.value);

  return (
    <Routes>
      <Route path="/" element={<Home value={props.value} />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/reload" element={<Reload />}></Route>
    </Routes>
  );
};

export default Main;
