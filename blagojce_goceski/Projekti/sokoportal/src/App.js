import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Izdavanje from "./components/pages/Izdavanje";
import Oglasi from "./components/pages/Oglasi";
import Restorani from "./components/pages/Restorani";
import Weather from "./components/pages/Weather";
import Info from "./components/pages/Info";
import Main from "./components/pages/Main";
import NoPage from "./components/pages/NoPage";
import "./app-style.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/oglasi" element={<Oglasi />} />
          <Route path="/izdavanje" element={<Izdavanje />} />
          <Route path="/restorani" element={<Restorani />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<NoPage />} />
          {/* <Route path="/admin/*" element={<Admin />} /> */}
        </Routes>
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
