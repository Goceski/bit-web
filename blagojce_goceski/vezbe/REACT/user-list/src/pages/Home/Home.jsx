import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "../../components/UserList/UserList";
import UserCards from "../../components/UserListVar2/UserCards";
// MATERIALIZE:
// Importuje se samo u jednom js fajlu, na primer App.js, a menja css u svim fajlovima
import "materialize-css/dist/css/materialize.min.css";

function Home(props) {
  // PRIKAZ U ZAVISNOSTI OD IZBORA 'LIST' ILI 'CARDS' ----------------------
  const [value, setValue] = useState(props.value);
  console.log("VALUE in HOME:", props.value);

  useEffect(() => {
    props.value ? setValue(false) : setValue(true);
  }, [props]);
  // -----------------------------------------------------------------------

  return (
    <React.Fragment>{value ? <UserCards /> : <UserList />}</React.Fragment>
  );
}

export default Home;
