import Days from "./components/Days";
import axios from "axios";
import React, { useState, useEffect } from "react";
import data from "./components/Data";

function App() {
  const obj = {
    id: 1,
    lol: 2,
    opa: {
      xiar: 3,
    },
  };
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Thursday",
    "Wednsday",
    "Tuesday",
    "Friday",
    "Saturday",
  ];
  // const [data, setData] = useState();
  // const url =
  //   "https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&daily=weathercode,temperature_2m_min&timezone=auto";
  // useEffect(() => {
  //   axios.get(url).then(response => setData(response.data));
  // }, []);
  console.log(data);
  return (
    <div>
      <h1 className="background">5-Day forecast</h1>
      <p className="location">Berlin</p>
      <div className="mainBox">
        {/* {daysOfWeek.map((day, key) => {
          return (
            <Days
              key={key}
              date={data.daily.time[key]}
              dayName={day}
              temp={data.daily.temperature_2m_min[key]}
            />
          );
        })} */}
        <p>{}</p>
      </div>
    </div>
  );
}

export default App;
