import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import { UserProvider } from "./componentes/UserContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import logo from "./images/logo_baby.png";


function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
    // Verificar si es un dispositivo móvil
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi/.test(userAgent));
  }, []);

  return (
    <UserProvider>
      {isMobile ? (
        isLoggedIn && isMobile ? (
          <></>
        ) : (
          <>
            <header className="header-login">
              <img
                src={logo}
                alt="logo-baby"
                className="item_header item_img"
              ></img>
              <a href="/sonatus/" className="item_header item_sonatus">
                SONATUS
              </a>
            </header>{" "}
          </>
        )
      ) : (
        <>
          <header className="header-login">
            <img
              src={logo}
              alt="logo-baby"
              className="item_header item_img"
            ></img>
            <a href="/" className="item_header item_sonatus">
              SONATUS
            </a>
          </header>{" "}
        </>
      )}
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/app/*" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          {isLoggedIn ? (
            <Route path="/app/*" element={<App />} />
          ) : (
            <Route path="/app/*" element={<Navigate to="/" />} />
          )}
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
      </UserProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

serviceWorkerRegistration.register();

reportWebVitals();
