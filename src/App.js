import Days from "./components/Days";
import axios from "axios";
import React, { useState, useEffect } from "react";

const data = {
  latitude: 40.1875,
  longitude: 44.5,
  generationtime_ms: 0.6879568099975586,
  utc_offset_seconds: 14400,
  timezone: "Asia/Yerevan",
  timezone_abbreviation: "+04",
  elevation: 989.0,
  daily_units: {
    time: "iso8601",
    weathercode: "wmo code",
    temperature_2m_min: "°C",
  },
  daily: {
    time: [
      "2022-12-28",
      "2022-12-29",
      "2022-12-30",
      "2022-12-31",
      "2023-01-01",
      "2023-01-02",
      "2023-01-03",
    ],
    weathercode: [3, 3, 1, 0, 1, 1, 0],
    temperature_2m_min: [-3.1, -2.4, -3.0, -3.8, -4.0, -4.6, -3.5],
  },
};

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
  return (
    <div>
      <h1 className="background">5-Day forecast</h1>
      <p className="location">Berlin</p>
      <div className="mainBox">
        {daysOfWeek.map((day, key) => {
          return (
            <Days
              key={key}
              date={data.daily.time[key]}
              dayName={day}
              temp={data.daily.temperature_2m_min[key]}
            />
          );
        })}
        <p>{}</p>
      </div>
    </div>
  );
}

export default App;
