import React, { useState } from "react";
import "../Colors.css";

const Colors = () => {
  const [colors, setColors] = useState("rosa");

  const purple = () => {
    const header = document.querySelector(".header");
    const text_sonatus = document.querySelector(".text-sonatus");
    const background_baby = document.querySelector(".baby-background-gradient");
    const btnMic = document.querySelector(".btnMic");
    const btnMicSVG = document.querySelector(".mic");

    if (colors === "green") {
      header.classList.remove("header-green");
      text_sonatus.classList.remove("text-sonatus-green");
      background_baby.classList.remove("baby-background-gradient-green");
      btnMic.classList.remove("btnMic-green");
      btnMicSVG.classList.remove("mic-green");
    } else if (colors === "blue") {
      header.classList.remove("header-blue");
      text_sonatus.classList.remove("text-sonatus-blue");
      background_baby.classList.remove("baby-background-gradient-blue");
      btnMic.classList.remove("btnMic-blue");
      btnMicSVG.classList.remove("mic-blue");
    }

    if (header && text_sonatus && background_baby && btnMic && btnMicSVG) {
      header.classList.add("header-purple");
      text_sonatus.classList.add("text-sonatus-purple");
      background_baby.classList.add("baby-background-gradient-purple");
      btnMic.classList.add("btnMic-purple");
      btnMicSVG.classList.add("mic-purple");
    }
    setColors("purple");
  };

  const green = () => {
    const header = document.querySelector(".header");
    const text_sonatus = document.querySelector(".text-sonatus");
    const background_baby = document.querySelector(".baby-background-gradient");
    const btnMic = document.querySelector(".btnMic");
    const btnMicSVG = document.querySelector(".mic");

    if (colors === "purple") {
      header.classList.remove("header-purple");
      text_sonatus.classList.remove("text-sonatus-purple");
      background_baby.classList.remove("baby-background-gradient-purple");
      btnMic.classList.remove("btnMic-purple");
      btnMicSVG.classList.remove("mic-purple");
    } else if (colors === "blue") {
      header.classList.remove("header-blue");
      text_sonatus.classList.remove("text-sonatus-blue");
      background_baby.classList.remove("baby-background-gradient-blue");
      btnMic.classList.remove("btnMic-blue");
      btnMicSVG.classList.remove("mic-blue");
    }

    if (header && text_sonatus && background_baby && btnMic && btnMicSVG) {
      header.classList.add("header-green");
      text_sonatus.classList.add("text-sonatus-green");
      background_baby.classList.add("baby-background-gradient-green");
      btnMic.classList.add("btnMic-green");
      btnMicSVG.classList.add("mic-green");
    }
    setColors("green");
  };
  const blue = () => {
    const header = document.querySelector(".header");
    const text_sonatus = document.querySelector(".text-sonatus");
    const background_baby = document.querySelector(".baby-background-gradient");
    const btnMic = document.querySelector(".btnMic");
    const btnMicSVG = document.querySelector(".mic");

    if (colors === "purple") {
      header.classList.remove("header-purple");
      text_sonatus.classList.remove("text-sonatus-purple");
      background_baby.classList.remove("baby-background-gradient-purple");
      btnMic.classList.remove("btnMic-purple");
      btnMicSVG.classList.remove("mic-purple");
    } else if (colors === "green") {
      header.classList.remove("header-green");
      text_sonatus.classList.remove("text-sonatus-green");
      background_baby.classList.remove("baby-background-gradient-green");
      btnMic.classList.remove("btnMic-green");
      btnMicSVG.classList.remove("mic-green");
    }

    if (header && text_sonatus && background_baby && btnMic && btnMicSVG) {
      header.classList.add("header-blue");
      text_sonatus.classList.add("text-sonatus-blue");
      background_baby.classList.add("baby-background-gradient-blue");
      btnMic.classList.add("btnMic-blue");
      btnMicSVG.classList.add("mic-blue");
    }
    setColors("blue");
  };
  const rosa = () => {
    const header = document.querySelector(".header");
    const text_sonatus = document.querySelector(".text-sonatus");
    const background_baby = document.querySelector(".baby-background-gradient");
    const btnMic = document.querySelector(".btnMic");
    const btnMicSVG = document.querySelector(".mic");

    if (colors === "purple") {
      header.classList.remove("header-purple");
      text_sonatus.classList.remove("text-sonatus-purple");
      background_baby.classList.remove("baby-background-gradient-purple");
      btnMic.classList.remove("btnMic-purple");
      btnMicSVG.classList.remove("mic-purple");
    } else if (colors === "green") {
      header.classList.remove("header-green");
      text_sonatus.classList.remove("text-sonatus-green");
      background_baby.classList.remove("baby-background-gradient-green");
      btnMic.classList.remove("btnMic-green");
      btnMicSVG.classList.remove("mic-green");
    } else if (colors === "blue") {
      header.classList.remove("header-blue");
      text_sonatus.classList.remove("text-sonatus-blue");
      background_baby.classList.remove("baby-background-gradient-blue");
      btnMic.classList.remove("btnMic-blue");
      btnMicSVG.classList.remove("mic-blue");
    }
    console.log("Estas presionando Rosa");
  };

  const handleMenuMouseDown = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className="content-colors-main" onMouseDown={handleMenuMouseDown}>
        <section className="colors-items" onClick={rosa}>
          <div className="colors-object"></div>
          <p>Crisom</p>
        </section>
        <section className="colors-items" onClick={purple}>
          <div className="colors-object"></div>
          <p>Morado</p>
        </section>
        <section className="colors-items" onClick={green}>
          <div className="colors-object"></div>
          <p>Verde</p>
        </section>
        <section className="colors-items" onClick={blue}>
          <div className="colors-object"></div>
          <p>Azul</p>
        </section>
      </div>
    </>
  );
};

export default Colors;
