import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserListVar2 from "./components/UserListVar2/UserListVar2";
import ToggleButton from "react-bootstrap/ToggleButton";

function App() {
  const [value, setValue] = useState(true);

  const handleValue = () => {
    value ? setValue(false) : setValue(true);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="button-var">
        <ToggleButton variant="secondary" onClick={handleValue}>
          {value ? "User List 1" : "User List 2"}
        </ToggleButton>
      </div>
      {value ? <UserList /> : <UserListVar2 />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
