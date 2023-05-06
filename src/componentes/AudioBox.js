import React from "react";
import "../App.css";

function AudioBox({ grabaciones, onBorrar }) {
  return (
    <div className="container-audios">
      {grabaciones.map((grabacion, index) => {
        const audioURL = URL.createObjectURL(grabacion);
        return (
          <div className="container-controls" key={index}>
            <audio controls className="play-audios" src={audioURL}></audio>
            <div>
              <button className="button_audios" onClick={() => console.log("hola")}>Enviar</button>
              <button className="button_audios" onClick={()=> onBorrar(index)}>Borrar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AudioBox;
