// https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&daily=weathercode,temperature_2m_max&timeformat=unixtime&timezone=auto
import axios from "axios";
function GetWeather(props) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max&timeformat=unixtime&timezone=auto",
    {
      params: {
        latitude: props.lat,
        longitude: props.lon,
      },
    }
  );
}
export default GetWeather;
