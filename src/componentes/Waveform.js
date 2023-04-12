import React, { useRef, useEffect, useState } from "react";
import Boton from "../componentes/Boton";
const Waveform = () => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  let animationId = null;
  const [isRecording, setIsRecording] = useState(false);
  const analyserRef = useRef(null);

  const startRecording = async () => {
    try {
      setIsRecording(true);
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

      analyserRef.current = analyser;
      source.connect(analyser);
      // No conectar el AnalyserNode al destino de audio
      //analyser.connect(audioContext.destination);

      const ctx = canvasRef.current.getContext("2d");
      const drawAudioWaveform = () => {
        animationId = requestAnimationFrame(drawAudioWaveform);

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
          const gradient = ctx.createLinearGradient(0, 0, canvasRef.current.width, canvasRef.current.height);
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
    setIsRecording(false);
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    audioContextRef.current?.close();
    analyserRef.current?.disconnect();
    cancelAnimationFrame(animationId);

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
      animationId = requestAnimationFrame(draw);
    };
    draw();
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

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      />
      <Boton clase={"botonP"} startRecording={startRecording} stopRecording={stopRecording} evento={isRecording}></Boton>
    </>
  );
};

export default Waveform;
