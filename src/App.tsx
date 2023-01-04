import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GetWeather from "./components/GetWeather";
import Days from "./components/Days.tsx";

function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  function inputHandler(event) {
    setInput(event.target.value);
  }
  function clickHandler() {
    let coords = input.split(" ");
    let lat = coords[0];
    let lon = coords[1];
    console.log(lat, lon);
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max&timeformat=unixtime&timezone=auto",
        {
          params: {
            latitude: lat,
            longitude: lon,
          },
        }
      )
      .then(response => {
        setData(response.data);
        console.log(response.data);
      });
    console.log(data.daily.time);
  }
  return (
    <div>
      <input onChange={inputHandler}></input>
      <button onClick={clickHandler}>Submit</button>
      <React.Fragment>
        {data.daily
          ? data.daily.temperature_2m_max.map((value, id) => (
              <Days temp={value} key={id} date={data.daily.time[id]} />
            ))
          : null}
      </React.Fragment>
    </div>
  );
}

export default App;
// data.daily.temperature_2m_max.map(value => <p>{value}</p>)
