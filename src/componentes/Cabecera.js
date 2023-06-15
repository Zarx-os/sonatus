import React,{useState,useRef, useEffect} from "react";
import "../Cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBrush } from "@fortawesome/free-solid-svg-icons";
import Bars from "./Bars";
import Colors from "./Colors";

function Cabecera() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [colorsVisible, setColorsVisible] = useState(false);
  const buttonRef = useRef();
  const buttonColorsRef = useRef();
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  const handleColorsClick =() => {
    setColorsVisible(!colorsVisible);
  }


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

  useEffect(() => {
    const handleClickColorsOutside = (event) => {
      if (
        buttonColorsRef.current &&
        !buttonColorsRef.current.contains(event.target) &&
        colorsVisible
      ) {
        setColorsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickColorsOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickColorsOutside);
    };
  }, [colorsVisible]);
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
          <FontAwesomeIcon className="icons" icon={faBrush} onClick={handleColorsClick} ref={buttonColorsRef}/>
        </section>
        
      </header>
      {menuVisible && <Bars device={"container-bars"} item={"items-bars"}/>}
      {colorsVisible && <Colors/>}
    </>
  );
}

export default Cabecera;
