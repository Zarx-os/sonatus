import React, { useEffect, useRef } from "react";
import "../Cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faStar,
  faBook,
  faUserXmark
} from "@fortawesome/free-solid-svg-icons";

function Bars({ setMenuVisible }) {

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuVisible]);

  const handleUsuarioClick = () => {
    console.log("Estás presionando Usuario");
  };

  const handleAjustesClick = () => {
    console.log("Estás presionando Ajustes");
  };

  const handleConocenosClick = () => {
    console.log("Estás presionando Conocenos");
  };

  const handleTerminosClick = () => {
    console.log("Estás presionando Terminos");
  };

  const handleCerrarSesionClick = () => {
    console.log("Se presionó cerrar sesión");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <>
      <div className="container-bars" ref={menuRef}>
        <section className="items-bars" onClick={handleUsuarioClick}>
          <FontAwesomeIcon icon={faUser} bounce />
          <p>Usuario</p>
        </section>
        <section className="items-bars" onClick={handleAjustesClick}>
          <FontAwesomeIcon icon={faGear} spin />
          <p>Ajustes</p>
        </section>
        <section className="items-bars" onClick={handleConocenosClick}>
          <FontAwesomeIcon icon={faStar} fade />
          <p>Conocenos</p>
        </section>
        <section className="items-bars" onClick={handleTerminosClick}>
          <FontAwesomeIcon icon={faBook} />
          <p>Terminos de Uso</p>
        </section>
        <section className="items-bars" onClick={handleCerrarSesionClick}>
          <FontAwesomeIcon icon={faUserXmark} />
          <p>Cerrar Sesion</p>
        </section>
      </div>
    </>
  );
}

export default Bars;