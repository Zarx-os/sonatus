import React, { useState, useContext } from "react";
import { InternetContext } from "./InternetContextProvider";
import { UserContext } from "./UserContext";
import "../App.css";
import axios from "axios";

function AudioBox({ grabaciones, onBorrar }) {
  const { isConnected } = useContext(InternetContext);
  const { user } = useContext(UserContext);
  const [idAudio, setIdAudio] = useState(null);
  const [clasificacion, setClasificacion] = useState(null);

  const cerrar = () => {
    setIdAudio(null);
    setClasificacion(null);
  };

  const enviarAudio = async (grabacion) => {
    try {
      const formData = new FormData();
      formData.append("audio", grabacion);
      formData.append("username", user);
      const response = await axios.post(
        "https://sonatus-app.azurewebsites.net/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Audio enviado correctamente al servidor");
        console.log(response.data);

        // Actualizar las variables de estado
        setIdAudio(response.data.id_audio);
        setClasificacion(response.data.clasificacion);
      } else {
        console.error("Error al enviar el audio al servidor");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="container-audios">
      {grabaciones.map((grabacion, index) => {
        const audioURL = URL.createObjectURL(grabacion.blob);
        return (
          <div className="container-controls-main" key={`${grabacion.titulo}+${index}`}>
            <h4>{grabacion.titulo}</h4>
            <div className="container-controls" >
              <audio controls className="play-audios" src={audioURL}></audio>
              <div>
                <button
                  className="button_audios"
                  onClick={() => {
                    enviarAudio(grabacion.blob);
                    onBorrar(index);
                  }}
                  disabled={!isConnected} // Deshabilita el botón si no hay conexión a Internet
                >
                  Enviar
                </button>
                <button
                  className="button_audios"
                  onClick={() => onBorrar(index)}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Mostrar el div con la información */}
      {idAudio && clasificacion && (
        <div className="audiobox-parent">
          <div className="audiobox-request-main"></div>
          <div className="audiobox-request">
            <span className="audiobox-request-x" onClick={cerrar}>
              X
            </span>
            <p>ID del audio: {idAudio}</p>
            <p>Clasificación: {clasificacion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AudioBox;
