import Days from "./components/Days.tsx";
import data from "./components/Data.tsx";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";

function App() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Thursday",
    "Wednsday",
    "Tuesday",
    "Friday",
    "Saturday",
  ];
  const [data, setData] = useState("");
  const [location, setLocation] = useState("Yerevan");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff3797c96eb489d052934ee3f65f68be`;

  const searchLocation = event => {
    if (event.key === "Enter") {
      axios.get(url).then(response => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  // const [data, setData] = useState();
  // const url =
  //   "https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&daily=weathercode,temperature_2m_min&timezone=auto";
  // useEffect(() => {
  //   axios.get(url).then(response => setData(response.data));
  // }, []);
  return (
    <div>
      <h1 className="background">Current forecast</h1>
      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
        placeholder="Enter city name"
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
      ></TextField>
      <p className="location"></p>
      <div className="mainBox">
        <p>{data.name}</p>
        {data.main ? <h1>{data.main.temp + "F"}</h1> : null}
      </div>
    </div>
  );
}

export default App;
