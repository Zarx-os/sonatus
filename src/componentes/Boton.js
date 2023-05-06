import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'


function Boton({clase,startRecording,stopRecording}){

    const [isRecording, setIsRecording] = useState(false);
    const handleClick= () =>{
        if(isRecording === false){
            startRecording();
        }else{
            stopRecording();
        }
        setIsRecording(!isRecording);
    }
    return(
        <>
        <button className={clase} onClick={handleClick}>
        <FontAwesomeIcon className="mic" icon={faMicrophone} />
        </button>
        </>
    );
}
export default Boton;