import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      // Assuming the response contains a token or success flag
      if (response.data.success) {
        setIsLoggedInState(true);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      } else {
        setError("Invalid username or password");
      }
      setUsername(""); // Limpiar el valor del username
      setPassword(""); // Limpiar el valor del password
    } catch (error) {
      console.error(error);
      setError("An error occurred during login");
      setUsername(""); // Limpiar el valor del username
      setPassword(""); // Limpiar el valor del password
    }
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

  if (isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <>
      <div className="container-main-filter"></div>
      <div className="login-background"></div>
      <div className="container-main">
        <div className="container">
          <section className="item container-sign mobile-item">
            <section className="subitem-sign">
              <span id="sign">Sign in</span>
            </section>
            <form onSubmit={handleSubmit}>
              <section className="subitem-sign container-input">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                ></input>
                <label>Username</label>
                
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                ></input>
                <label>Password</label>
                <div className="container-password">
                <div
                  className="show-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye}> </FontAwesomeIcon>}
                </div>
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Sign In</button>
                <div className="container-text">
                  <div className="tx-left">
                    <label className="check_rem">
                      Remember me
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="tx-right">
                    <a href="/forgot">Forgot Password</a>
                  </div>
                </div>
              </section>
            </form>
          </section>
          <section className="item container-welcome">
            <span id="welcome">Welcome to login</span>
            <span id="dont-account">Don't have an account?</span>
            <Link to="/register" className="button-link">
              <button id="sing-up">Sign Up</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
