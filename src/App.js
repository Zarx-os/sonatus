import React, { useState, useEffect } from "react";
import "./App.css";
import Waveform from "./componentes/Waveform";
import Cabecera from "./componentes/Cabecera";
import detect from "detect.js";
import BabyAnimation from "./componentes/BabyAnimation";

function useDeviceDetection() {
  const [deviceInfo, setDeviceInfo] = useState(
    detect.parse(navigator.userAgent)
  );

  useEffect(() => {
    function handleResize() {
      setDeviceInfo(detect.parse(navigator.userAgent));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceInfo;
}

/*const activateBaby= ()=>{

}*/

function App() {
  const deviceInfo = useDeviceDetection();
  
  const mobile = deviceInfo.device.type;
  //const os = deviceInfo.os.family;
  //const browser = deviceInfo.browser.family;
  //console.log(mobile)
  /*
  function handleLogout() {
    localStorage.removeItem('token'); // eliminar el token del almacenamiento local
    history.push('/login'); // redirigir al usuario al componente Login
  }*/

  return (
    <>
      {((mobile === "Mobile" || mobile === "Tablet") ? true : false) ? (
        <>
          <Cabecera></Cabecera>
          <div className="baby-background"></div>
          <section className="container-main-app">
              <BabyAnimation></BabyAnimation>
              <Waveform ></Waveform>
          </section>
        </>
      ) : (
        <>
        <p>Estás en una computadora con el sistema operativo .</p>
        <BabyAnimation></BabyAnimation>
        </>
      )}
    </>
  );
}

export default App;
