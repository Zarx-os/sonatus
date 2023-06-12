import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../bar-user.css"

const Historial = () => {
  const [historial, setHistorial] = useState([]);

  // Función para agrupar los audios por semana
  const groupByWeek = useCallback((audios) => {
    const grouped = [];
    let currentWeek = null;

    audios.forEach((audio) => {
      const date = new Date(audio.fecha);
      const week = getWeekString(date);

      if (week !== currentWeek) {
        currentWeek = week;
        grouped.push({
          week,
          audios: [audio],
        });
      } else {
        grouped[grouped.length - 1].audios.push(audio);
      }
    });

    return grouped;
  },[])


  useEffect(() => {
    const username = localStorage.getItem("user");

    if (username) {
      axios
        .post("http://20.38.171.121:5000/audios", { username })
        .then((response) => {
          const sortedHistorial = response.data.sort((a, b) => {
            const dateA = new Date(a.fecha);
            const dateB = new Date(b.fecha);
            const timeDiff = dateA.getTime() - dateB.getTime();
            const weeksDiff = timeDiff / (1000 * 60 * 60 * 24 * 7);
            return weeksDiff;
          });

          const groupedHistorial = groupByWeek(sortedHistorial); // Agrupar por semana

          setHistorial(groupedHistorial);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [groupByWeek]);

  

  // Función para obtener la cadena que representa la semana y el mes
  const getWeekString = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const week = Math.ceil((date.getDate() - date.getDay() + 1) / 7);
    return `Semana ${week} - ${month}/${year}`;
  };

  return (
    <div className="content-historial-main">
      <h2>Historial</h2>
      <div className="content-historial">
      {historial.map((week) => (
        <div key={week.week}>
          <h3>{week.week}</h3>
          <ul>
            {week.audios.map((audio) => (
              <li className="list-item-historial" key={audio.id_Audio}>
                <span>{audio.titulo}</span>
                <span>{audio.clasificacion}</span>
                <span>{audio.fecha}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Historial;
