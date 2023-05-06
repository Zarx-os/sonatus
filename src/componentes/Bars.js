import React,{useEffect,useRef} from "react";
import "../Cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faStar,faBook } from "@fortawesome/free-solid-svg-icons";

function Bars({ setMenuVisible }) {
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
    
      const menuRef = useRef(null);

  return (
    <>
      <div className="container-bars" ref={menuRef}>
        <section
          className="items-bars"
          onClick={() => {
            console.log("Estas presionanod Usuario");
          }}
        >
          <FontAwesomeIcon icon={faUser} bounce />
         <p>Usuario</p>
        </section>
        <section
          className="items-bars"
          onClick={() => {
            console.log("Estas presionanod Ajustes");
          }}
        >
          <FontAwesomeIcon icon={faGear} spin />
          <p>Ajustes</p>
        </section>
        <section
          className="items-bars"
          onClick={() => {
            console.log("Estas presionanod Conocenos");
          }}
        >
          <FontAwesomeIcon icon={faStar} fade />
          <p>Conocenos</p>
        </section>
        <section
          className="items-bars"
          onClick={() => {
            console.log("Estas presionanod Terminos");
          }}
        >
            <FontAwesomeIcon icon={faBook}/>
          <p>Terminos de Uso</p>
        </section>
      </div>
    </>
  );
}

export default Bars;
