import logo from "./logo.svg";
import "./App.css";
import Days from "./components/Days";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const obj = {
    id: 1,
    lol: 2,
    opa: {
      xiar: 3,
    },
  };
  const [data, setData] = useState();
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&daily=weathercode,temperature_2m_min&timezone=auto";
  useEffect(() => {
    axios.get(url).then(response => setData(response.data));
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="background">5-Day forecast</h1>
      <p className="location">Berlin</p>
      <div className="mainBox">
        <Days
          date={data.daily.time[0]}
          dayName="Sunday"
          temp={data.daily.temperature_2m_min[0]}
        />
        <Days
          date={data.daily.time[1]}
          dayName="Monday"
          temp={data.daily.temperature_2m_min[1]}
        />
        <Days
          date={data.daily.time[2]}
          dayName="Thursday"
          temp={data.daily.temperature_2m_min[2]}
        />
        <Days
          date={data.daily.time[3]}
          dayName="Wednsday"
          temp={data.daily.temperature_2m_min[3]}
        />
        <Days
          date={data.daily.time[4]}
          dayName="Tuesday"
          temp={data.daily.temperature_2m_min[4]}
        />
        <Days
          date={data.daily.time[5]}
          dayName="Friday"
          temp={data.daily.temperature_2m_min[5]}
        />
        <Days
          date={data.daily.time[6]}
          dayName="Saturday"
          temp={data.daily.temperature_2m_min[6]}
        />
        <p>{data.daily.temperature_2m_min[1]}</p>
      </div>
    </div>
  );
}

export default App;
