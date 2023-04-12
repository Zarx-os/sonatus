import React, {useState} from "react";
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
        <button className={clase} onClick={handleClick}></button>
        </>
    );
}
export default Boton;