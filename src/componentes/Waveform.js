import React, { useRef, useEffect, useState } from "react";
import Boton from "../componentes/Boton";
import AudioBox from "../componentes/AudioBox";

const Waveform = () => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  let animationId = useRef(null);
  const analyserRef = useRef(null);
  const [grabaciones, setGrabaciones] = useState([]);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const mediaRecorderRef = useRef(null);
  const animationActiveRef = useRef(false);
  const [isRecording, setIsRecording] = useState(false);
  const tiempoTranscurridoRef = useRef();

  const startRecording = async () => {
    try {
      cancelAnimationFrame(animationId.current);
      animationActiveRef.current = false;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);

      const analyser = audioContext.createAnalyser();

      if (/iPhone|Android/i.test(navigator.userAgent)) {
        analyser.fftSize = 512;
      } else {
        analyser.fftSize = 2048;
      }

      // En esta parte se agreaga el iniciador del contador
      setIsRecording(true);

      analyserRef.current = analyser;
      source.connect(analyser);
      const mediaRecorder = new MediaRecorder(mediaStreamRef.current);
      const chunks = [];

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        //const audioURL = URL.createObjectURL(blob);
        //console.log(grabaciones)

        // Agregar la grabación con su título al arreglo de grabaciones
        // Pedir al usuario que ingrese el título utilizando el prompt
        const titulo = prompt("Ingrese un título para la grabación");
        const nuevaGrabacion = {
          blob: blob,
          titulo: titulo,
        };
        if (grabaciones.length === 0) {
          setGrabaciones([nuevaGrabacion]);
          //console.log(`Si entro al primer if ${blob}`)
        } else {
          setGrabaciones((prevGrabaciones) => [...prevGrabaciones, nuevaGrabacion]);
        }
        //let audio = new Audio(audioURL);
        //audio.play();
        //console.log("Audio URL:", audioURL);
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();

      // No conectar el AnalyserNode al destino de audio
      //analyser.connect(audioContext.destination);

      const ctx = canvasRef.current.getContext("2d");
      const drawAudioWaveform = () => {
        animationId.current = requestAnimationFrame(drawAudioWaveform);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        ctx.beginPath();
        const sliceWidth = (canvasRef.current.width * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * canvasRef.current.height) / 2;
          const now = Date.now();
          const hue = (now / 20) % 360; // Cambiar el número 10 para ajustar la velocidad de cambio de color
          const gradient = ctx.createLinearGradient(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          gradient.addColorStop(0, `hsl(${hue}, 100%, 50%)`);
          gradient.addColorStop(1, `hsl(${hue + 180}, 100%, 50%)`); // Agregar un segundo punto de color para crear el efecto de gradiente
          ctx.strokeStyle = gradient;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }

        ctx.lineWidth = 8;

        //ctx.strokeStyle = "#fff";
        ctx.stroke();
      };

      drawAudioWaveform();
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    // Detener el intervalo de actualización del tiempo transcurrido
    setIsRecording(false);

    mediaRecorderRef.current?.stop();
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    analyserRef.current?.disconnect();

    cancelAnimationFrame(animationId.current);
    animationActiveRef.current = false;

    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
    }
    wave();
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let phase = 1;
    const amplitude = 50;
    const frequency = 10;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let i = 0; i < canvas.width; i++) {
        const y =
          amplitude * Math.sin(frequency * i + phase) + canvas.height / 2;
        ctx.lineTo(i, y);
      }
      ctx.strokeStyle = "#DC143C";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      phase += 0.02;

      animationId.current = requestAnimationFrame(draw);
    };

    // Iniciar la animación solo si no está activa
    if (!animationActiveRef.current) {
      draw();
      animationActiveRef.current = true;
    }

    return () => {
      // Detener la animación al desmontar el componente
      cancelAnimationFrame(animationId.current);
      animationActiveRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (isRecording) {
      const id = setInterval(() => {
        tiempoTranscurridoRef.current += 1;
        setTiempoTranscurrido(tiempoTranscurridoRef.current);
        if (tiempoTranscurridoRef.current >= 5) {
          stopRecording();
        }
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
      tiempoTranscurridoRef.current = 0;
      setTiempoTranscurrido(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRecording]);

  const wave = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let phase = 1;
    const amplitude = 50;
    const frequency = 10;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let i = 0; i < canvas.width; i++) {
        const y =
          amplitude * Math.sin(frequency * i + phase) + canvas.height / 2;
        ctx.lineTo(i, y);
      }
      ctx.strokeStyle = "#DC143C";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      phase += 0.02;

      // Llamar a requestAnimationFrame con la función draw
      animationId.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const handleBorrarClick = (index) => {
    const newGrabaciones = [...grabaciones];
    newGrabaciones.splice(index, 1);
    setGrabaciones(newGrabaciones);
  };

  return (
    <>
      <p>00:0{tiempoTranscurrido}</p>
      <div className="border_waveform">
        <canvas ref={canvasRef} className="waveform" />
      </div>
      <Boton
        clase={"btnMic"}
        onClick={isRecording ? stopRecording : startRecording}
        isRecording={isRecording}
        s
      ></Boton>
      <AudioBox
        grabaciones={grabaciones}
        onBorrar={handleBorrarClick}
      ></AudioBox>
    </>
  );
};

export default Waveform;
