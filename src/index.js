import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import logo from "./images/logo_baby.png";

function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
        {(!isMobile) && (
          <header className="header-login">
            <img
              src={logo}
              alt="logo-baby"
              className="item_header item_img"
            ></img>
            <a href="/" className="item_header item_sonatus">
              SONATUS
            </a>
          </header>
        )}
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            {isLoggedIn && <Route path="/app" element={<App />} />}
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

serviceWorkerRegistration.register();

reportWebVitals();
