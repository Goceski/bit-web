import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const About = (props) => {
  console.log("ABOUT PROPS", props);

  // HIDE NAV-BAR -------------------------------------------
  props.funcFalse();
  // --------------------------------------------------------

  // HIDE LAST UPDATE ---------------------------------------
  props.lastUpdateFalse();
  // --------------------------------------------------------

  return (
    <>
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="naslov1">About</h2>
          <LoremIpsum p={1} />
          <h3 className="naslov2">What we do</h3>
          <LoremIpsum p={1} />
        </div>
      </div>
    </>
  );
};

export default About;
