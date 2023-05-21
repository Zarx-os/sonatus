import React,{useState,useRef,useEffect} from "react";
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


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuVisible && buttonRef.current && !buttonRef.current.contains(event.target)) {
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
      {console.log(menuVisible)}
    </>
  );
}

export default Cabecera;
