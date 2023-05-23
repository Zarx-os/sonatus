import React,{useState,useRef} from "react";
import "../Cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBrush } from "@fortawesome/free-solid-svg-icons";
import Bars from "./Bars";

function Cabecera() {
  const [menuVisible, setMenuVisible] = useState(false);
  const buttonRef = useRef();
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };


  

  return (
    <>
      <header className="header">
        <section className="item-cabecera">
          <FontAwesomeIcon className="icons" icon={faBars} onClick={handleMenuClick} ref={buttonRef} />
        </section>
        <section>
          <h1 className="text-sonatus">SONATUS</h1>
        </section>
        <section className="item-cabecera">
          <FontAwesomeIcon className="icons" icon={faBrush} />
        </section>
        
      </header>
      {menuVisible && <Bars setMenuVisible={setMenuVisible}/>}
    </>
  );
}

export default Cabecera;
