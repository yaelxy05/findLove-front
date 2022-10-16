import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Import containers
import HomeNotConnected from "../../containers/Register";
import Login from "../../containers/Login";
// Import CSS
import "./App.scss";

function App({isLogged, refreshLogin}) {
  useEffect(() => {
    refreshLogin();
  }, [refreshLogin]);
  
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
