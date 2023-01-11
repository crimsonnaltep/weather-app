import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GetWeather from "./components/GetWeather";
import Days from "./components/Days.tsx";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  function inputHandler(event) {
    setInput(event.target.value);
  }
  function clickHandler() {
    let postal = input;
    axios
      .get(
        "https://www.mapquestapi.com/geocoding/v1/address?key=TgjJwnYNNoGm0XH4ffeytUpgxvUG01ZU",
        { params: { location: postal } }
      )
      .then(response => {
        const cordData = response.data;
        setCity(response.data.results[0].locations[0].adminArea5);
        console.log(response.data);
        return axios.get(
          "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max&timeformat=unixtime&timezone=auto",
          {
            params: {
              latitude: cordData.results?.[0].locations[0].latLng.lat,
              longitude: cordData.results?.[0].locations[0].latLng.lng,
            },
          }
        );
      })
      .then(response => {
        setData(response.data);
        console.log(response.data);
      });
  }
  return (
    <Grid>
      <Grid align="center">
        <TextField
          size="small"
          autoFocus
          label="Zip Code"
          onChange={inputHandler}
        ></TextField>
        <Button variant="contained" onClick={clickHandler}>
          Submit
        </Button>
      </Grid>
      <Typography variant="h1" align="center">
        {city}
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        {data.daily
          ? data.daily.temperature_2m_max.map((value, id) => (
              <Card key={id} variant="outlined">
                <Days
                  temp={value}
                  key={id}
                  date={new Date(data.daily.time[id] * 1000)}
                />
              </Card>
            ))
          : null}
      </Grid>
    </Grid>
  );
}

export default App;
// const pupul = {
//   info: {
//     statuscode: 0,
//     copyright: {
//       text: "© 2022 MapQuest, Inc.",
//       imageUrl: "http://api.mqcdn.com/res/mqlogo.gif",
//       imageAltText: "© 2022 MapQuest, Inc.",
//     },
//     messages: [],
//   },
//   options: { maxResults: -1, ignoreLatLngInput: false },
//   results: [
//     {
//       providedLocation: { location: "91203" },
//       locations: [
//         {
//           street: "",
//           adminArea6: "",
//           adminArea6Type: "Neighborhood",
//           adminArea5: "Glendale",
//           adminArea5Type: "City",
//           adminArea4: "Los Angeles",
//           adminArea4Type: "County",
//           adminArea3: "CA",
//           adminArea3Type: "State",
//           adminArea1: "US",
//           adminArea1Type: "Country",
//           postalCode: "91203",
//           geocodeQualityCode: "Z1XAA",
//           geocodeQuality: "ZIP",
//           dragPoint: false,
//           sideOfStreet: "N",
//           linkId: "0",
//           unknownInput: "",
//           type: "s",
//           latLng: { lat: 34.15219, lng: -118.26455 },
//           displayLatLng: { lat: 34.15219, lng: -118.26455 },
//           mapUrl: "",
//         },
//       ],
//     },
//   ],
// };
// console.log(pupul.results[0].locations[0].latLng.lat);
// console.log(pupul.results[0].locations[0].latLng.lng);
