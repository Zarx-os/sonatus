import React, { useState } from "react";
import "../Register.css";

const Register = () => {
  const [step, setStep] = useState(1);

  const [showStep, setShowStep] = useState(true);
  const numSteps = 3;
  const maxProgress = 100 / numSteps;
  const [progress, setProgress] = useState(maxProgress);
  const frases = ["Sign In", "Siguente", "Terminar"];

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    user: "",
    pass: "",
    repass: "",
  });

  const handleSubmit = (event) => {
    //event.preventDefault();
    console.log(formValues);
    if (validateForm()) {
      window.alert("Se puede enviar al servidor");
      // sendData();  Aqui se envia al servidor en formato json para subirlo a la base de datos
    }
  };

  const sendData = async () => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    if (response.ok) {
      setStep(numSteps);
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "name",
      "email",
      "user",
      "pass",
      "repass",
    ];
    let isValid = true;
    for (const field of requiredFields) {
      if (formValues[field].trim() === "") {
        isValid = false;
      }
    }
    if (formValues["pass"] !== formValues["repass"]) {
      isValid = false;
    }
    return isValid;
  };

  const nextStep = () => {
    if (step === numSteps) {
      
    } else if (step === numSteps - 1) {
      handleSubmit();
    }
      setShowStep(false);
      setTimeout(() => {
        setStep(step + 1);
        setProgress(progress + maxProgress);
        setShowStep(true);
      }, 300);
  };

  /*
    const prevStep = () => {
      setStep(step - 1);
      setProgress(progress - maxProgress);
    };
  */

  return (
    <>
      <div className="blur-background"></div>
      <div className="container-reg">
        <section className="subitem-in">
          {step === 1 && (
            <section className={`subitem-in paso1 ${showStep ? "step" : ""}`}>
              <section>
                <h1> Welcome</h1>
              </section>
              <section>
                <p>Bienvenido para la creacion de su cuenta nueva</p>
                <p>Esto sera un registro paso a paso</p>
              </section>
            </section>
          )}
          {step === 2 && (
            <section
              className={`subitem-in in-container ${
                showStep ? "step" : ""
              } paso2`}
            >
              <h2>Sign In</h2>
              <p>
                <input
                  type="text"
                  id="nombre"
                  data-label="name"
                  required
                  placeholder="Type your name"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                />
                <label htmlFor="nombre" data-label="name">
                  Nombre:
                </label>
              </p>
              <input
                type="email"
                id="email"
                required
                placeholder="Type your email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
              <label htmlFor="email">Email:</label>

              <input
                type="text"
                id="usuario"
                required
                placeholder="Type your user"
                value={formValues.user}
                onChange={(e) =>
                  setFormValues({ ...formValues, user: e.target.value })
                }
              />
              <label htmlFor="usuario">Usuario:</label>

              <input
                type="password"
                id="contraseña"
                required
                placeholder="Type your password"
                value={formValues.pass}
                onChange={(e) =>
                  setFormValues({ ...formValues, pass: e.target.value })
                }
              />
              <label htmlFor="contraseña">Contraseña:</label>

              <input
                type="password"
                id="re-contraseña"
                required
                placeholder="Type again password"
                value={formValues.repass}
                onChange={(e) =>
                  setFormValues({ ...formValues, repass: e.target.value })
                }
              />
              <label htmlFor="contraseña">Re-Contraseña:</label>
              
            </section>
          )}
          {step === 3 && (
            <section
              className={`container-check paso3 ${showStep ? "step" : ""} `}
            >
              <div id="back-line">
                <div id="line">
                  <div id="circle-check">
                    <svg
                      version="1.1"
                      id="check"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="currentColor"
                        d="M31.8,3.6c-0.2-0.5-0.4-0.9-0.9-1.2C30.4,2,29.7,1.8,29,1.9c-0.6,0.1-1.2,0.4-1.6,1l-8.5,11.2l0,0l-7.2,9.5l-7.1-9.4 c-0.5-0.7-1.3-1-2.1-1c-0.5,0-1,0.2-1.4,0.5c-0.5,0.4-0.9,1-1,1.7s0.1,1.2,0.5,1.8l9.1,12.1l0,0c0.1,0.2,0.3,0.3,0.4,0.4 c0.4,0.3,0.9,0.5,1.4,0.5c0.8,0,1.6-0.3,2.1-1L22.1,18l0,0l9.1-12.1C32,5.2,32.1,4.4,31.8,3.6z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          )}
        </section>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <button className={`button-sig back-boton${step}`} onClick={nextStep}>
          {frases[step - 1]}
        </button>
      </div>
    </>
  );
};

export default Register;
