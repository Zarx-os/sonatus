import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'


function Boton({clase,onClick, isRecording}){

    return(
        <>
        <button className={clase} onClick={onClick}>
        <FontAwesomeIcon className="mic" icon={faMicrophone} />
        </button>
        </>
    );
}
export default Boton;