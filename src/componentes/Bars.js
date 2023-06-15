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
import Ajustes from "./Ajustes";

function Bars({ device, item }) {
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
    window.location.href = "/sonatus/";
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
      {showAjustes && <Ajustes />}
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
                <h4>Torres Reyes Karla Elizabeth</h4>
                <p>
                  Estudiante del Instituto Politécnico Nacional encargada de
                  programar el modelo para el reconocimiento y clasifacion de
                  los llantos de bebes mediante una red neuronal
                </p>
              </li>

              <li>
                <h4>Trejo Vera Fernanda</h4>
                <p>Estudiante del Instituto Politécnico Nacional encargada de realizar el diseno frontend de la aplicacion web</p>
              </li>

              <li>
                <h4>Mireles Martinez Angel Mauricio</h4>
                <p>Estudiante del Instituto Politécnico Nacional encargado de realizar el trabajo correspondiente al Backend para las solicitudes a la base de datos</p>
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
                  proporcionar cierta información personal, como tus datos como
                  Nombre, Apellidos y grabaciones del llanto del bebé.
                </p>
                <p>
                  b. Nos comprometemos a proteger tu privacidad y a utilizar tus
                  datos personales de acuerdo con nuestra Política de
                  Privacidad. No compartiremos tu información con terceros sin
                  tu consentimiento.
                </p>
              </li>
              <li>
                <h3>Privacidad y confidencialidad</h3>
                <p>
                  El desarrollador e institucion se compromete a utilizar los
                  llantos de bebés de manera confidencial y a no divulgar,
                  compartir ni publicar los datos de identificación personal o
                  cualquier información que pueda identificar a los bebés o sus
                  familias. Además, el usuario se compromete a cumplir con todas
                  las leyes y regulaciones de privacidad aplicables.
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
