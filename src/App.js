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

function App() {
  const deviceInfo = useDeviceDetection();
  
  const mobile = deviceInfo.device.type;
  //const os = deviceInfo.os.family;
  //const browser = deviceInfo.browser.family;

  return (
    <>
      {(mobile === ("Mobile" || "Tablet") ? true : false) ? (
        <>
          <Cabecera></Cabecera>
          <section className="audio-title">
            <h1 className="h1G">Presiona para saber que siente tu bebe</h1>
          </section>
          <div className="borderC"></div>
          <div className="baby-background"></div>
          <section className="audio">
            <div className="wave">
              <Waveform></Waveform>
            </div>
            
          </section>
          <section className="sound-clips"></section>
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
