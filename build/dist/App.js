"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Days_1 = require("./components/Days");
var react_1 = require("react");
var data = {
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
    var obj = {
        id: 1,
        lol: 2,
        opa: {
            xiar: 3,
        },
    };
    var daysOfWeek = [
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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { className: "background" }, "5-Day forecast"),
        react_1.default.createElement("p", { className: "location" }, "Berlin"),
        react_1.default.createElement("div", { className: "mainBox" },
            daysOfWeek.map(function (day, key) {
                return (react_1.default.createElement(Days_1.default, { date: data.daily.time[key], dayName: day, temp: data.daily.temperature_2m_min[key] }));
            }),
            react_1.default.createElement("p", null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map