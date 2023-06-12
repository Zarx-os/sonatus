import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Bars from "./Bars";
import Historial from "./Historial";
import Archivos from "./Archivos";
import Informacion from "./Informacion";
import { Link, Routes, Route} from "react-router-dom";

const UserPC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const buttonRef = useRef();
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuVisible
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <>
      <main className="main">
        <nav className="navegacion">
          <section className="navegacion-item-left">
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleMenuClick}
              ref={buttonRef}
            />
          </section>
          <section className="navegacion-item-right">
            <Link to="historial">Historial</Link>
            <Link to="archivos">Archivos</Link>
            <Link to="informacion-personal">Informacion personal</Link>
          </section>
        </nav>
        {menuVisible && (
          <Bars device={"container-bars-pc"} item={"items-bars-pc"} />
        )}
        <section className="banner_sesion"></section>

        <div className="content-user">
          <Routes>
          <Route path="*" element={<Historial />} />
            <Route path="historial" element={<Historial />} />
            <Route path="archivos" element={<Archivos />} />
            <Route path="informacion-personal" element={<Informacion />} />
          </Routes>
        </div>

        <footer className="footer">
          Instituto Politecnico Nacional Todos los derechos recervados
        </footer>
      </main>
    </>
  );
};

export default UserPC;
