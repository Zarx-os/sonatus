import React, { useRef, useContext, useState } from "react";
import "../Cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faStar,
  faBook,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "./UserContext";

function Bars({ device, item, setMenuVisible }) {
  const menuRef = useRef(null);
  const { user } = useContext(UserContext);
  const [showAjustes, setShowAjustes] = useState(false);
  const [showConocenos, setShowConocenos] = useState(false);
  const [showTerminos, setShowTerminos] = useState(false);

  const handleUsuarioClick = () => {
    console.log("Estás presionando Usuario");
  };

  const handleAjustesClick = () => {
    console.log("Estás presionando Ajustes");
    setShowAjustes(true);
    setShowConocenos(false);
    setShowTerminos(false);
    //setMenuVisible(false);
  };

  const handleConocenosClick = () => {
    console.log("Estás presionando Conócenos");
    setShowAjustes(false);
    setShowConocenos(true);
    setShowTerminos(false);
  };

  const handleTerminosClick = () => {
    console.log("Estás presionando Términos");
    setShowAjustes(false);
    setShowConocenos(false);
    setShowTerminos(true);
  };

  const handleCerrarSesionClick = () => {
    console.log("Se presionó cerrar sesión");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };
  const handleMenuMouseDown = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className={device} ref={menuRef} onMouseDown={handleMenuMouseDown}>
        <section className={item} onClick={handleUsuarioClick}>
          <FontAwesomeIcon icon={faUser} bounce />
          <p>{user}</p>
        </section>
        <section className={item} onClick={handleAjustesClick}>
          <FontAwesomeIcon icon={faGear} spin />
          <p>Ajustes</p>
        </section>
        <section className={item} onClick={handleConocenosClick}>
          <FontAwesomeIcon icon={faStar} fade />
          <p>Conócenos</p>
        </section>
        <section className={item} onClick={handleTerminosClick}>
          <FontAwesomeIcon icon={faBook} />
          <p>Términos de Uso</p>
        </section>
        <section className={item} onClick={handleCerrarSesionClick}>
          <FontAwesomeIcon icon={faUserXmark} />
          <p>Cerrar Sesión</p>
        </section>
      </div>
      {showAjustes && (
        <div className="content-bars-background">
          <div className="ajustes">
            <h2>Ajustes</h2>

            <h3>Gestión de cuenta</h3>
            <p>
              En esta sección, puedes gestionar la información de tu cuenta y
              personalizar tu perfil:
            </p>

            <ul>
              <li>
                Actualizar tu nombre, dirección de correo electrónico u otra
                información personal.
              </li>
              <li>Cambiar tu foto de perfil.</li>
              <li>Configurar las preferencias de privacidad de tu cuenta.</li>
              <li>Modificar tu contraseña.</li>
            </ul>

            <h3>Soporte y ayuda</h3>
            <p>
              Si necesitas asistencia o tienes alguna pregunta, estamos aquí
              para ayudarte. Puedes utilizar las siguientes opciones de soporte
              y ayuda:
            </p>

            <ul>
              <li>
                Envíanos un correo electrónico a support@tusitio.com para
                recibir asistencia técnica.
              </li>
              <li>Llama a nuestro equipo de soporte al +123456789.</li>
              <li>
                Consulta nuestra sección de preguntas frecuentes para encontrar
                respuestas a las dudas más comunes.
              </li>
              <li>
                Explora nuestros recursos y tutoriales en línea para obtener más
                información sobre el funcionamiento del sistema.
              </li>
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
      )}
      {showConocenos && (
        <div className="content-bars-background">
          <div className="conocenos">
            <h2>Conócenos</h2>

            <h3>Estudiantes destacados de la Escuela Superior de Cómputo</h3>
            <p>
              Somos un equipo de tres estudiantes de la Escuela Superior de
              Cómputo del Instituto Politécnico Nacional, apasionados por la
              inteligencia artificial y el desarrollo de sistemas innovadores.
            </p>

            <ul>
              <li>
                <h4>Nombre Estudiante 1</h4>
                <p>Breve descripción y logros del estudiante 1.</p>
              </li>

              <li>
                <h4>Nombre Estudiante 2</h4>
                <p>Breve descripción y logros del estudiante 2.</p>
              </li>

              <li>
                <h4>Nombre Estudiante 3</h4>
                <p>Breve descripción y logros del estudiante 3.</p>
              </li>
            </ul>

            <h3>
              Importancia de las redes neuronales en el reconocimiento de
              patrones
            </h3>
            <p>
              Las redes neuronales son una herramienta fundamental en el campo
              del reconocimiento de patrones. Estos modelos inspirados en el
              funcionamiento del cerebro humano permiten aprender y extraer
              características complejas de los datos, lo que resulta
              especialmente útil para identificar patrones en el llanto de los
              bebés.
            </p>

            <h3>Nuestro sistema de clasificación del llanto de bebés</h3>
            <p>
              Nuestro sistema utiliza redes neuronales entrenadas para el
              reconocimiento de patrones en el llanto de los bebés. Mediante el
              análisis de características acústicas y otros parámetros, el
              sistema es capaz de clasificar diferentes tipos de llanto y
              proporcionar una estimación de las necesidades del bebé.
            </p>

            <p>
              Creemos que nuestro sistema puede ser de gran utilidad para padres
              y cuidadores, brindando una herramienta adicional para comprender
              y atender las necesidades de los bebés de manera más eficiente y
              efectiva.
            </p>
          </div>
        </div>
      )}
      {showTerminos && (
        <div className="content-bars-background">
          <div className="terminosYcondiciones">
            <h2>Términos y Condiciones</h2>
            <p>
              Gracias por utilizar nuestra aplicación de reconocimiento de
              patrones en el llanto de bebés. Antes de continuar, te pedimos que
              leas detenidamente los siguientes términos y condiciones. Al
              utilizar esta aplicación, aceptas cumplir con los términos y
              condiciones establecidos a continuación:
            </p>

            <ol>
              <li>
                <h3>Uso de la aplicación:</h3>
                <p>
                  a. Nuestra aplicación está diseñada para proporcionar un
                  sistema de clasificación del llanto de los bebés basado en el
                  reconocimiento de patrones.
                </p>
                <p>
                  b. Debes utilizar la aplicación de acuerdo con su propósito
                  previsto y únicamente para fines no comerciales.
                </p>
                <p>
                  c. No debes utilizar la aplicación para ningún propósito
                  ilegal, fraudulento o no ético.
                </p>
              </li>

              <li>
                <h3>Precisión de los resultados:</h3>
                <p>
                  a. Los resultados proporcionados por la aplicación son
                  estimaciones basadas en algoritmos de reconocimiento de
                  patrones.
                </p>
                <p>
                  b. No podemos garantizar la precisión completa de los
                  resultados y no nos hacemos responsables de cualquier decisión
                  o acción tomada en función de los resultados proporcionados
                  por la aplicación.
                </p>
              </li>

              <li>
                <h3>Privacidad y datos personales:</h3>
                <p>
                  a. Para utilizar la aplicación, es posible que se te solicite
                  proporcionar cierta información personal, como la edad del
                  bebé o grabaciones de su llanto.
                </p>
                <p>
                  b. Nos comprometemos a proteger tu privacidad y a utilizar tus
                  datos personales de acuerdo con nuestra Política de
                  Privacidad. No compartiremos tu información con terceros sin
                  tu consentimiento.
                </p>
              </li>

              <li>
                <h3>Responsabilidad:</h3>
                <p>
                  a. No nos hacemos responsables de ningún daño directo,
                  indirecto, incidental, consecuente o especial que pueda surgir
                  del uso de la aplicación.
                </p>
                <p>
                  b. La aplicación se proporciona "tal cual" y renunciamos a
                  cualquier garantía expresa o implícita, incluidas, entre
                  otras, las garantías de comerciabilidad, idoneidad para un
                  propósito particular y no infracción.
                </p>
              </li>

              <li>
                <h3>Propiedad intelectual:</h3>
                <p>
                  a. Todos los derechos de propiedad intelectual relacionados
                  con la aplicación, incluidos los derechos de autor y las
                  marcas comerciales, son propiedad nuestra.
                </p>
                <p>
                  b. No puedes utilizar, copiar, modificar, distribuir o
                  reproducir la aplicación o cualquier parte de ella sin nuestro
                  consentimiento previo por escrito.
                </p>
              </li>

              <li>
                <h3>Modificaciones de los términos y condiciones:</h3>
                <p>
                  Nos reservamos el derecho de modificar estos términos y
                  condiciones en cualquier momento sin previo aviso. Te
                  recomendamos que revises periódicamente esta sección para
                  estar al tanto de los cambios.
                </p>
              </li>
            </ol>

            <p>
              Al utilizar esta aplicación, aceptas estos términos y condiciones
              en su totalidad. Si no estás de acuerdo con alguno de estos
              términos, te recomendamos que no utilices la aplicación.
            </p>

            <p>
              Si tienes alguna pregunta o inquietud sobre estos términos y
              condiciones, no dudes en ponerte en contacto con nosotros.
            </p>

            <p>
              Fecha de entrada en vigor: [Fecha de entrada en vigor de los
              términos y condiciones]
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Bars;
