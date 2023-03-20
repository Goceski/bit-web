import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const FetchData = (props) => {
  // UCITAVANJE PODATAKA SA API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      //   "https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js"
      .then((res) => res.json())
      .then((json) => {
        // console.log("JSON:", json);
        console.log("JSON.results:", json.results);

        // SAVE DATA TO LOCAL STORAGE
        localStorage.setItem("reactUsers", JSON.stringify(json.results));

        // LOADER CONTROL
        props.fetchDataSetting();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <>
      <Loader />
    </>
  );
};

export default FetchData;
