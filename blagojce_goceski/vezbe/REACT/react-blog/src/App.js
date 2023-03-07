import "./App.scss";
import Navbar from "./components/Navbar";
import List from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <List />
    </div>
  );
}

export default App;
