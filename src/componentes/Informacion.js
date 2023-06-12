import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"

const Informacion = () => {
  const [informacionPersonal, setInformacionPersonal] = useState({});

  useEffect(() => {
    const username = localStorage.getItem("user");

    if (username) {
      // Obtener la información personal del usuario de la base de datos
      axios
        .post("http://20.38.171.121:5000/informacion-personal", { username })
        .then((response) => {
          setInformacionPersonal(response.data);
        });
    }
  }, []);

  return (
    <div className="content-informacion">
      <h2>Información Personal</h2>
      <p>Nombre:</p><span> {informacionPersonal.nombre}</span>
      <p>Apellido Paterno:</p> <span>{informacionPersonal.apellido_P}</span>
      <p>Apellido Materno:</p><span> {informacionPersonal.apellido_M}</span>
      <p>Email: </p><span>{informacionPersonal.email}</span>
    </div>
  );
};

export default Informacion;
