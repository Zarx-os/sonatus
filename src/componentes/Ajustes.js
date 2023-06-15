import React from "react";
import "../Cabecera.css";

const Ajustes = () => {
    return (
        <div className="content-bars-background">
          <div className="ajustes">
            <h2>Ajustes</h2>

            
            <div className="change-password">
            <h3>Cambiar contraseña</h3>
              <input type="password" placeholder="Contraseña"></input>
              <input type="password" placeholder="Re-Contraseña"></input>
              <button>Cambiar</button>
            </div>

            <h3>Soporte y ayuda</h3>
            <p>
              Si necesitas asistencia o tienes alguna pregunta, estamos aquí
              para ayudarte. Puedes utilizar las siguientes opciones de soporte
              y ayuda:
            </p>

            <ul>
              <li>
                Envíanos un correo electrónico a sonatus2019@gmail.com para
                recibir asistencia técnica.
              </li>
              <li>Llama a nuestro equipo de soporte al +123456789.</li>
            </ul>

            <p>
              Estamos comprometidos a brindarte el mejor servicio posible y a
              garantizar que tengas una experiencia óptima con nuestro sistema
              de clasificación del llanto de bebés. No dudes en contactarnos si
              necesitas ayuda o tienes alguna sugerencia para mejorar nuestro
              servicio.
            </p>
          </div>
        </div>
    )
}

export default Ajustes;

