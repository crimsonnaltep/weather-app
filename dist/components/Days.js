"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Days(props) {
    return (<div className="weatherBox">
      <h3>{props.dayName}</h3>
      <p>{props.date}</p>
      <img></img>
      <h1>{props.temp}</h1>
      <p>Clear sky</p>
    </div>);
}
exports.default = Days;
//# sourceMappingURL=Days.js.map