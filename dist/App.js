"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Data_1 = require("./components/Data");
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
    // const [data, setData] = useState();
    // const url =
    //   "https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&daily=weathercode,temperature_2m_min&timezone=auto";
    // useEffect(() => {
    //   axios.get(url).then(response => setData(response.data));
    // }, []);
    console.log(Data_1.default);
    return (<div>
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
        <p></p>
      </div>
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map