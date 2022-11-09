import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Import components
import Contact from "../HomeConnected/Contact";
import Home from "../HomeConnected/Home";
import SearchProfil from "../HomeConnected/SearchProfil";

// Import containers
import HeaderConnected from "../../containers/Navigation";
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
          <Route
            path="/espace-utilisateur/recherche"
            element={<SearchProfil />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
