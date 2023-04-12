import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Izdavanje from "./components/pages/Izdavanje";
import Oglasi from "./components/pages/Oglasi";
import Restorani from "./components/pages/Restorani";
import Main from "./components/pages/Main";
import NoPage from "./components/pages/NoPage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/oglasi" element={<Oglasi />} />
              <Route path="/izdavanje" element={<Izdavanje />} />
              <Route path="/restorani" element={<Restorani />} />
              <Route path="*" element={<NoPage />} />
              {/* <Route path="/admin/*" element={<Admin />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
