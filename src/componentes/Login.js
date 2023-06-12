import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../Login.css";
import { UserContext } from "./UserContext";

const Login = ({ setIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberSession, setRememberSession] = useState(false); // Variable de estado para recordar sesión
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://20.38.171.121:5000/login", {
        username,
        password,
      });

      // Assuming the response contains a token or success flag
      if (response.data.success) {
        setIsLoggedInState(true);
        setIsLoggedIn(true);
        setUser(response.data.user); // Establece la información del usuario en el estado del contexto

        // Guardar la sesión solo si se seleccionó el checkbox de recordar sesión
        if (rememberSession) {
          localStorage.setItem("isLoggedIn", true);
        } else {
          localStorage.removeItem("isLoggedIn");
        }
      } else {
        setError("username o contraseña invalido");
      }
      setUsername(""); // Limpiar el valor del username
      setPassword(""); // Limpiar el valor del password
    } catch (error) {
      console.error(error);
      setError("un error ocurrio en el login");
      setUsername(""); // Limpiar el valor del username
      setPassword(""); // Limpiar el valor del password
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };
  const handleForgotPasswordCerrar = () => {
    setShowForgotPassword(false);
  };

  const sendPasswordResetRequest = async () => {
    try {
      // Hacer la solicitud al servidor con el correo electrónico
      const response = await axios.post("http://20.38.171.121:5000/password", {
        email,
      });

      // Realizar acciones según la respuesta del servidor
      console.log(response.data); // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito o error.
    } catch (error) {
      console.error(error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
    }
    setShowForgotPassword(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleRememberSessionChange = () => {
    setRememberSession(!rememberSession);
  };

  if (isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <>
      {showForgotPassword && (
        <div className="content-forgot-main">
          <div className="content-forgot">
            <p>Ingresa tu correo para recuperación de contraseña:</p>
            <span onClick={handleForgotPasswordCerrar}>x</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendPasswordResetRequest}>Enviar</button>
          </div>
        </div>
      )}
      <div className="container-main-filter"></div>
      <div className="login-background"></div>
      <div className="container-main">
        <div className="container">
          <section className="item container-sign mobile-item">
            <section className="subitem-sign">
              <span id="sign">Iniciar Sesion</span>
            </section>
            <form onSubmit={handleSubmit}>
              <section className="subitem-sign container-input">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                ></input>
                <label>Nombre de usuario</label>

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                ></input>
                <label>Contraseña</label>
                <div className="container-password">
                  <div
                    className="show-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={faEye}> </FontAwesomeIcon>
                    )}
                  </div>
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Iniciar</button>
                <div className="container-text">
                  <div className="tx-left">
                    <label className="check_rem">
                      Recuerdame
                      <input
                        type="checkbox"
                        checked={rememberSession}
                        onChange={handleRememberSessionChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="tx-right">
                    <span onClick={() => handleForgotPasswordClick()}>
                      Contraseña Olvidada
                    </span>
                  </div>
                </div>
              </section>
            </form>
          </section>
          <section className="item container-welcome">
            <span id="welcome">Bienvenido al login</span>
            <span id="dont-account">¿No tienes una cuenta?</span>
            <Link to="/register" className="button-link">
              <button id="sing-up">Unete</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
