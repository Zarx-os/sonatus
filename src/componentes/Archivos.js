    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import "../bar-user.css"

    const Archivos = () => {
    const [archivos, setArchivos] = useState([]);

    useEffect(() => {
        const username = localStorage.getItem("user");
        // Obtener los archivos del usuario de la base de datos
        if (username) {
        axios
            .post("http://20.38.171.121:5000/get_audios", { username })
            .then((response) => {
            setArchivos(response.data);
            });
        } else {
        console.log("Hubo un error");
        }
    }, []);

    const descargarArchivo = (archivoId, titulo) => {
        // Realizar la petición para descargar el archivo con el archivoId
        axios({
        url: "http://20.38.171.121:5000/download_audio",
        method: "POST",
        data: {
            archivoId: archivoId,
        },
        responseType: "arraybuffer",
        })
        .then((response) => {
            console.log(response);
            const blob = new Blob([response.data], { type: "audio/wav" });
            const audioElement = new Audio();
            audioElement.src = URL.createObjectURL(blob);
            // Crear un enlace <a> y configurarlo para que se descargue el archivo al hacer clic
      const link = document.createElement("a");
      link.href = audioElement.src;
      link.download = titulo + ".wav";
      link.click();

      // Liberar la URL de descarga
      window.URL.revokeObjectURL(audioElement.src);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="content-archivos-main">
        <h2>Archivos</h2>
        <div className="content-archivos">
        <ul>
            {archivos.map((archivo) => (
            <li className="list-item-archivos" key={archivo.id_Audio}>
                <span>{archivo.titulo}</span>
                <button onClick={() => descargarArchivo(archivo.id_Audio)}>
                Descargar
                </button>
            </li>
            ))}
        </ul>
        </div>
        </div>
    );
    };

    export default Archivos;
