import React from "react";
import "./noUserMatch.scss";

const NoUserMatch = () => {
  return (
    <>
      <div className="no-user-match">
        {/* GOOGLE ICONS */}
        <i className="material-icons">account_box</i>
        <h3>We couldn't find any</h3>
        <h3>people matching your</h3>
        <h3>search</h3>
      </div>
    </>
  );
};

export default NoUserMatch;
