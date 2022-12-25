import logo from "./logo.svg";
import "./App.css";
import Days from "./components/Days";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
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
        <Days date="March 1st, 1:00pm" dayName="Sunday" />
        <Days date="March 1st, 1:00pm" dayName="Monday" />
        <Days date="March 1st, 1:00pm" dayName="Thursday" />
        <Days date="March 1st, 1:00pm" dayName="Wednsday" />
        <Days date="March 1st, 1:00pm" dayName="Tuesday" />
        <Days date="March 1st, 1:00pm" dayName="Friday" />
        <Days date="March 1st, 1:00pm" dayName="Saturday" />
        <p>
          {data.daily.time.map(date => (
            <div>{date}</div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default App;
