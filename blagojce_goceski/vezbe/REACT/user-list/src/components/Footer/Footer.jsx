import React, { useState, useEffect } from "react";
import LastUpdate from "../LastUpdate/LastUpdate";
import "./footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";

const Footer = (props) => {
  // PRIKAZ LAT UPDATE U ZAVISNOSTI 'true/false' ----------------------
  const [lastUpdateValue, setLastUpdateValue] = useState(props.lastUpdateValue);

  useEffect(() => {
    props.lastUpdateValue
      ? setLastUpdateValue(true)
      : setLastUpdateValue(false);
  }, [props.lastUpdateValue]);
  // ------------------------------------------------------------------

  return (
    <div className="footer-container">
      <div className="container-left">
        <h6>© 2023 BiT Student</h6>
      </div>
      <div className="container-right">
        {lastUpdateValue === true && <LastUpdate />}
      </div>
    </div>
  );
};

export default Footer;
