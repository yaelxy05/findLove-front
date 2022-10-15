import React from "react";
import { Route, Routes } from "react-router-dom";

// Import Components
import Footer from "../../components/Footer";
// Import containers
import HomeNotConnected from "../../containers/Register";
import Login from "../../containers/Login";
// Import CSS
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeNotConnected />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
