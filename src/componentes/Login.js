import React from "react";
import "../Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <section className="item container-sign">
          <section className="subitem-sign">
            <span id="sign">Sign in</span>
          </section>
          <section className="subitem-sign">
            
            <div className="container-input">
                <input type="text" required></input>
                <label>Username</label>
            </div>
            <div className="container-input">
                <input type="text" required></input>
                <label>Password</label>
            </div>
            <button>Sign In</button>
          </section>
          <section className="subitem-sign rem">
            <section className="check_rem">
              <input type="checkbox" id="remember"></input>
              <label for="remember">Remember me</label>
            </section>
            <span id="forgot">Forgot Password</span>
          </section>
        </section>
        <section className="item container-welcome">
          <span id="welcome">Welcome to login</span>
          <span id="dont-account">Dont have an account?</span>
          <button id="sing-up">Sign Up</button>
        </section>
      </div>
    </>
  );
};

export default Login;
