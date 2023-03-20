import React, { useState, useEffect } from "react";
import FetchData from "../../components/FetchData/FetchData";
import { Navigate } from "react-router-dom";

const Reload = (props) => {
  console.log("RELOAD PROPS", props);

  // SHOW NAV-BAR (HIDE U ABOUT) -------------------------------------------
  props.funcTrue();
  // -----------------------------------------------------------------------

  // DELAY FUNCTION --------------------------------------------------------
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelay(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [delay]);
  // -----------------------------------------------------------------------

  return (
    <>
      <FetchData />
      {delay ? <Navigate to="/" /> : console.log("Reload Delay")}
    </>
  );
};

export default Reload;
