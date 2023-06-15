import React, { useState } from "react";
import axios from "axios";
import "../Register.css";

const Register = () => {
  const [step, setStep] = useState(0);

  const [showStep, setShowStep] = useState(true);
  const numSteps = 3;
  const maxProgress = 100 / numSteps;
  const [progress, setProgress] = useState(maxProgress);
  const frases = ["Unete", "Siguente", "Terminar"];

  const [formValues, setFormValues] = useState({
    name: "",
    apellido_P:"",
    apellido_M:"",
    email: "",
    pass: "",
    repass: "",
  });

  const handleSubmit = (event) => {
    //event.preventDefault();
    if (validateForm()) {
      sendData(); // Aqui se envia al servidor en formato json para subirlo a la base de datos
      
    }
  };

  const sendData = async () => {
    try {
      const response = await axios.post('https://sonatus-app.azurewebsites.net/register', formValues);
  
      if (response.status === 200) {
        stepNext()
      }else if(response.status === 500){
        window.alert("Ocurrio un error relacionado con el correo repetido")
      }
      else{
        console.log(response.data);
      }
      /*if (response.status === 200) {
        setStep(numSteps);
      }*/
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "apellido_P","apellido_M", "pass", "repass"];
    let isValid = true;
    //console.log(formValues)
    let valors = []
    for (const field of requiredFields) {
      if (formValues[field].trim() === "") {
        isValid = false;
        valors.push(field)
      }
    }
    if(valors.length > 0) {
      window.alert(`Estos campos no estan llenados ${valors}`);
    }

    if (formValues["pass"] !== formValues["repass"]) {
      isValid = false;
      window.alert("Las contraseña no coinciden");
    }
    return isValid;
  };

  const nextStep = () => {
    if (step === numSteps-1) {
      setStep(0);
      setProgress(0);
      setShowStep(false);
      window.location.href = "/sonatus/";
    } else if (step === numSteps - 2) {
      handleSubmit();
    } else {
      stepNext();
    }
    console.log(step)
  };


  const stepNext= () =>{
    setShowStep(false);
      setTimeout(() => {
        setStep(step + 1);
        setProgress((step+1) * maxProgress);
        setShowStep(true);
      }, 300);
  }
  /*
    const prevStep = () => {
      setStep(step - 1);
      setProgress(progress - maxProgress);
    };
  */

  return (
    <>
      <div className="container-main-register">
        <div className="blur-background"></div>
        <div className="blur-background-size"></div>
        <div className="container-reg">
          <section className="subitem-in">
            {step === 0 && (
              <section className={`subitem-in paso1 ${showStep ? "step" : ""}`}>
                <section>
                  <h1>Bienvenido</h1>
                </section>
                <section>
                  <p>Daremos un paso a la vez para la creacion de su cuenta nueva en SONATUS</p>
                  <p>Este registro solo necesitamos su nombre y correo electronico para poder adquirir 
                    un usuario con el que podra acceder con la contraseña que registre en el formulario</p>
                </section>
              </section>
            )}
            {step === 1 && (
              <section
                className={`subitem-in in-container ${
                  showStep ? "step" : ""
                } paso2`}
              >
                <h2>Inscribirse</h2>
                <div className="container_reg_input">
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
                  id="apellido_P"
                  required
                  placeholder="Coloca tu apellido paterno"
                  value={formValues.apellido_P}
                  onChange={(e) =>
                    setFormValues({ ...formValues, apellido_P: e.target.value })
                  }
                />
                <label htmlFor="apellido_P">Apellido Paterno:</label>

                <input
                  type="text"
                  id="apellido_M"
                  required
                  placeholder="Coloca tu apellido materno"
                  value={formValues.apellido_M}
                  onChange={(e) =>
                    setFormValues({ ...formValues, apellido_M: e.target.value })
                  }
                />
                <label htmlFor="apellido_M">Apellido Materno:</label>
                <input
                  type="password"
                  id="contraseña"
                  required
                  placeholder="Coloca tu contraseña"
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
                  placeholder="Coloca de nuevo tu contraseña"
                  value={formValues.repass}
                  onChange={(e) =>
                    setFormValues({ ...formValues, repass: e.target.value })
                  }
                />
                <label htmlFor="contraseña">Re-Contraseña:</label>
                </div>
              </section>
            )}
            {step === 2 && (
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
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button className={`button-sig back-boton${step}`} onClick={nextStep}>
            {frases[step]}
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
