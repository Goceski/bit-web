import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// MATERIALIZE:
// Importuje se samo u jednom js fajlu, na primer App.js, a menja css u svim fajlovima
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom"; // ZA MULTYPAGE
import Main from "./pages/Main";

function App() {
  // STATE 'true/false' ZA OPCIJU LIST-GRID ----------------------------------------
  const [value, setValue] = useState(true);
  // Funkcija da se prosledi podatak za 'value' 'true/false' od child komponente 'Header' prema parent componenti 'App'
  const toggleButtonValue = (data) => {
    data ? setValue(false) : setValue(true);
    console.log("VALUE in APP:", value);
  };
  // -------------------------------------------------------------------------------

  // STATE 'true/false' ZA SHOW/HIDE NAV-BAR-a -------------------------------------
  const [navBarValue, setNavBarValue] = useState(true);
  // Funkcije da se prosledi podatak 'true/false' od child komponente 'Home' 'About' 'Reload' prema parent componenti 'App'
  const navBarValueTrue = () => {
    setNavBarValue(true);
  };
  const navBarValueFalse = () => {
    setNavBarValue(false);
  };
  // -------------------------------------------------------------------------------

  // STATE 'true/false' ZA SHOW/HIDE LAST UPDATE -----------------------------------
  const [lastUpdateValue, setLastUpdateValue] = useState(true);
  // Funkcije da se prosledi podatak 'true/false' od child komponente 'Home' 'About' 'Reload' prema parent componenti 'App'
  const lastUpdateValueTrue = () => {
    setLastUpdateValue(true);
  };
  const lastUpdateValueFalse = () => {
    setLastUpdateValue(false);
  };
  // -------------------------------------------------------------------------------

  return (
    <BrowserRouter>
      <Header func={toggleButtonValue} navBarValue={navBarValue} />
      <Main
        value={value}
        funcTrue={navBarValueTrue}
        funcFalse={navBarValueFalse}
        lastUpdateTrue={lastUpdateValueTrue}
        lastUpdateFalse={lastUpdateValueFalse}
      />
      <Footer lastUpdateValue={lastUpdateValue} />
    </BrowserRouter>
  );
}

export default App;
