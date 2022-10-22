import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Import components
import HomeConnected from "../HomeConnected";
import Contact from "../HomeConnected/Contact";
import Home from "../HomeConnected/Home";
import HeaderConnected from "../../components/HeaderConnected";
import Chat from "../../components/Chat";

// Import containers
import HomeNotConnected from "../../containers/Register";
import Login from "../../containers/Login";
// Import CSS
import "./App.scss";

function App({ isLogged, refreshLogin }) {
  useEffect(() => {
    refreshLogin();
  }, [refreshLogin]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeNotConnected />} />
        <Route
          exact
          path="/espace-utilisateur"
          element={
            <>
              <HeaderConnected />
            </>
          }
        >
          <Route path="/espace-utilisateur/home" element={<Home />} />
          <Route path="/espace-utilisateur/contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
